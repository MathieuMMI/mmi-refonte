<script setup>
const router = useRoute();
const monId = ref('');
const { client } = usePrismic();
monId.value = router.params.id || '';

const { data: actupage } = await useAsyncData('news', () => client.getByID(monId.value));

console.log(actupage.value.data)
// variables pour le contenu
const titre = actupage.value.data.news_title[0].text;
const accroche =  actupage.value.data.news_hook[0].text ;
const description = actupage.value.data.news_desc[0].text ;
const date = actupage.value.data.news_date[0].text ;
const image = actupage.value.data.news_img.url ;
const imageALT = actupage.value.data.news_img.alt;
</script>

<template>
  <div class="">
    <h2 class="">{{ titre }}</h2>
    <p class="">{{ accroche }}</p>
    <img :src="image" :alt="imageALT" class="" />
    <p>{{ description }}</p>
    <p>{{ date }}</p>
  </div>
</template>
