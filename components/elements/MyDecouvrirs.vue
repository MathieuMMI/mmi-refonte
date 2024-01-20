<script setup>

import { reactive } from 'vue'
const response = [
    {
        id: 1,
        imageSrc: 'decouvrir_espace_pro.jpg',
        imageSrcM: 'decouvrir_espace_pro_mobile.jpg',
        imageAlt: 'decouvrir_espace_pro',
        title: 'ESPACE PRO',
        href: '/espace-pro',
    },
    {
        id: 2,
        imageSrc: 'decouvrir_departement.jpg',
        imageSrcM: 'decouvrir_departement_mobile.jpg',
        imageAlt: 'decouvrir_departement',
        title: 'DÉPARTEMENT',
        href: '/departement',
    },
    {

        id: 3,
        imageSrc: 'decouvrir_formation.jpg',
        imageSrcM: 'decouvrir_formation_mobile.jpg  ',
        imageAlt: 'decouvrir_formation',
        title: 'FORMATION',
        href: '/formation',
    },
];
const decouvrirs = reactive(response)



</script>
<template>
    <div class="mydecouvrirs">


        <MyDecouvrir v-for="decouvrir in decouvrirs" v-bind='decouvrir' :key="decouvrir.id" />

    </div>
</template>
<style lang="scss" scoped>
.mydecouvrirs {
    width: 70%;
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto;
}

@media screen and (max-width: 1400px) {
    .mydecouvrirs {
        width: 100%;
    }
}

@media screen and (max-width: 1100px) {
    .mydecouvrirs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        gap: rem(32);
        margin-bottom: rem(64);
    }
}
</style>