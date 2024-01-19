<script setup>

import { reactive } from 'vue'
const response = [
    {
        id: 1,
        imageSrc: 'decouvrir_espace_pro.png',
        imageSrcM: 'decouvrir_espace_pro_mobile.png',
        imageAlt: 'discover_profesionnal_area',
        title: 'PROFESSIONNAL AREA',
        href: '/en/espace-pro',
    },
    {
        id: 2,
        imageSrc: 'decouvrir_departement.png',
        imageSrcM: 'decouvrir_departement_mobile.png',
        imageAlt: 'discover_department',
        title: 'DEPARTMENT',
        href: '/en/departement',
    },
    {

        id: 3,
        imageSrc: 'decouvrir_formation.png',
        imageSrcM: 'decouvrir_formation_mobile.png  ',
        imageAlt: 'discover_formation',
        title: 'FORMATION',
        href: '/en/formation',
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