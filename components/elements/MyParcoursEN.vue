<script setup>
import MyParcour from './MyParcour.vue';

import { reactive } from 'vue'
const response = [
    {
        id: 1,
        imageSrc: 'card_design.jpg',
        imageAlt: 'card_design',
        title: 'Digital creation',
        text: "Explore the creative marriage of technology and innovation at the heart of our program. Whether you're drawn to design, web development, virtual reality or audiovisuals, our training offers complete immersion in the essential skills [...].",
        href: '/en/parcours-crea',
        couleurVariable: '#1818BB'
    },
    {
        id: 2,
        imageSrc: 'card_com.jpg',
        imageAlt: 'card_com',
        title: 'Communication Strategy',
        text: "Explore the fusion of creativity and technology that shapes tomorrow's multimedia communicators. Thanks to innovative resources, you'll acquire cutting-edge communication skills [...].",
        href: '/en/parcours-com',
        couleurVariable: '#FFA51D'
    },
    {
        id: 3,
        imageSrc: 'card_dev.jpg',
        imageAlt: 'card_dev',
        title: 'Web development',
        text: "This immersive experience will plunge you into the heart of modern web technologies, from HTML to React. Our expert trainers will guide you in the acquisition of essential skills to excel in web development.",
        href: '/en/parcours-dev',
        couleurVariable: '#010101'
    },
];
const parcours = reactive(response)



</script>
<template>
    <div class="myparcours">
        <MyParcourEN v-for="parcour in parcours" v-bind='parcour' :key="parcour.id" />
    </div>
</template>
<style lang="scss" scoped>
.myparcours {
    display: grid;
    grid-template-columns: auto auto auto;

}

@media screen and (max-width: 767px) {

    .myparcours {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        gap: rem(20);
    }
}
</style>