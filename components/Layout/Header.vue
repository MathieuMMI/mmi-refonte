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
                <NuxtLink to="/">
                    <MyLogo />
                </NuxtLink>
                <MyMenu @click="toggleMenu" />
            </div>
            <Menu v-if="isMenuVisible" @close="toggleMenu" />
        </div>
        <div v-else>
            <div class="header" v-if="!isMenuVisible">
                <NuxtLink to="/en">
                    <MyLogo />
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
}

.menu {
    flex: 1;
    overflow-y: auto;
}

.no-scroll {
    overflow: hidden;
}
</style>
