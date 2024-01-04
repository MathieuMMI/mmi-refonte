<script setup>
const router = useRoute();
const IdProjet = ref('');
const { client } = usePrismic();
IdProjet.value = router.params.id || '';

const { data: projectpage } = await useAsyncData('project', () => client.getByID(IdProjet.value));

// variables pour le contenu
const titre = projectpage.value.data.project_title[0].text;
const description = projectpage.value.data.project_desc[0].text ;
const annee = projectpage.value.data.project_annee[0].text ;
const image = projectpage.value.data.project_img.url ;
const imageALT = projectpage.value.data.project_img.alt;
</script>

<template>
<div class="">
    <h2 class="">{{ titre }}</h2>
    <p class="">{{ description }}</p>
    <img :src="image" :alt="imageALT" class="" />
    <p>{{ annee }}</p>
  </div>
</template>
