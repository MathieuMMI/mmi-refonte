<script setup>
import { ref, onBeforeUnmount, watch } from 'vue';

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
</script>

<template>
    <div>
        <div class="header" v-if="!isMenuVisible">
            <RouterLink to="/">
                <MyLogo />
            </RouterLink>
            <MyMenu @click="toggleMenu" />
        </div>
        <Menu v-if="isMenuVisible" @close="toggleMenu" />
    </div>
</template>

<style lang="scss">
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
