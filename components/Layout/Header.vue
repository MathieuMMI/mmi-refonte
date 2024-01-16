<script setup>
import { ref, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isMenuVisible = ref(false);

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};

// Ajoute une classe au corps lorsque le menu est visible
const toggleBodyScroll = () => {
    const body = document.body;
    body.classList.toggle('no-scroll', isMenuVisible.value);
};

// Supprime la classe lors de la destruction du composant
onBeforeUnmount(() => {
    document.body.classList.remove('no-scroll');
});

// Utilise un watcher pour détecter les changements de isMenuVisible
watch(isMenuVisible, toggleBodyScroll);

const indexEN = ref(route.name.startsWith('en') && route.name !== 'en/')
watchEffect(() => {
    indexEN.value = route.name.startsWith('en') && route.name !== 'en/';
});
</script>

<template>
    <header>
        <div v-if="!indexEN">
            <div class="header" v-if="!isMenuVisible">
                <NuxtLink to="/" class="header__accueil">
                    <p class="header__accueil--content">Accueil</p>
                </NuxtLink>
                <MyMenu @click="toggleMenu" />
            </div>
            <Menu v-if="isMenuVisible" @close="toggleMenu" />
        </div>
        <div v-else>
            <div class="header" v-if="!isMenuVisible">
                <NuxtLink to="/en" class="header__accueil">
                    <p class="header__accueil--content">Home</p>
                </NuxtLink>
                <MyMenu @click="toggleMenu" />
            </div>
            <MenuEN v-if="isMenuVisible" @close="toggleMenu" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    margin: rem(30);
    z-index: 2;


    &__accueil {
        text-decoration: none;
        border: rem(1) solid $secondary-color;
        border-radius: rem(32);
        padding: rem(16);

        &--content {
            font-family: $font-satoshi-bold;
        }
    }
}

.menu {
    flex: 1;
    overflow-y: auto;
}

.no-scroll {
    overflow: hidden;
}
</style>
