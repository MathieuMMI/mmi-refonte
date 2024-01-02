<script setup>
import MyParcour from './MyParcour.vue';

import { reactive } from 'vue'
const response = [
    {
        id: 1,
        imageSrc: 'card_design.jpg',
        imageAlt: 'card_design',
        title: 'Création numérique',
        text: "Explorez le mariage créatif entre technologie et innovation au cœur de notre programme. Que vous soyez attiré par le design, le développement web, la réalité virtuelle ou l'audiovisuel, notre formation offre une immersion complète dans les compétences essentielles [...]",
        href: '/parcours-crea',
        couleurVariable: '#1818BB'
    },
    {
        id: 2,
        imageSrc: 'card_com.jpg',
        imageAlt: 'card_com',
        title: 'Stratégie de communication',
        text: "Explorez la fusion entre créativité et technologie façonne les communicants multimédias de demain. Grâce à des ressources innovantes, vous acquerrez des compétences pointues en communication [...]",
        href: '/parcours-com',
        couleurVariable: '#FFA51D'
    },
    {
        id: 3,
        imageSrc: 'card_dev.jpg',
        imageAlt: 'card_dev',
        title: 'Développement web',
        text: "Cette expérience immersive vous plongera au cœur des technologies web modernes, de HTML à React. Nos formateurs experts vous guideront dans l'acquisition de compétences essentielles pour exceller dans le développement [...]",
        href: '/parcours-dev',
        couleurVariable: '#010101'
    },
];
const parcours = reactive(response)



</script>
<template>
    <div class="myparcours">


        <MyParcour v-for="parcour in parcours" v-bind='parcour' :key="parcour.id" />

    </div>
</template>
<style lang="scss">
.myparcours {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

}
</style>