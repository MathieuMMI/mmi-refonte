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
    <header class="stickyheader">
        <div v-if="!indexEN">
            <div class="header" v-if="!isMenuVisible">
                <NuxtLink to="/" class="header__accueil">
                    <p class="header__accueil--content">Accueil</p>
                </NuxtLink>
                <MyMenu class="header__menuIcon" @click="toggleMenu" />
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
.stickyheader {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: none;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: rem(16);

    &__accueil {
        text-decoration: none;
        border: rem(1) solid $secondary-color;
        border-radius: rem(32);
        padding: rem(16);
        margin-left: rem(30);

        &--content {
            font-family: $font-satoshi-bold;
        }
    }

    &__menuIcon {
        margin-right: rem(30);
    }
}

.menu {
    flex: 1;
    overflow-y: auto;
}

.no-scroll {
    overflow: hidden;
}

@media screen and (max-width: 767px) {
    .header {
        padding: rem(20);

        &__accueil {
            margin-left: rem(0);
        }
    }
}
</style>
