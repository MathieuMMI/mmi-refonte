<script setup>
import MyParcour from './MyParcour.vue';

import { reactive } from 'vue'
const response = [
    {
        id: 1,
        imageSrc: 'decouvrir_espace_pro.png',
        imageAlt: 'decouvrir_espace_pro',
        title: 'ESPACE PRO',
        href: '/espace-pro',
    },
    {
        id: 2,
        imageSrc: 'decouvrir_departement.png',
        imageAlt: 'decouvrir_departement',
        title: 'DÉPARTEMENT',
        href: '/departement',
    },
    {

        id: 3,
        imageSrc: 'decouvrir_formation.png',
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
<style lang="scss">
.mydecouvrirs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

}
</style>