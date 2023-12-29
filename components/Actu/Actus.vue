<script setup>
const { client } = usePrismic()
const { data: news } = await useAsyncData('news', () => client.getAllByType('news'));
console.log(news);
</script>

<template>
    <div class="actus">
        <Actu class="actus-actu" v-for="actu in news" :key="actu.news_id" :title="actu.data.news_title" 
        :img="actu.data.news_img" :desc="actu.data.news_hook" :actuid="actu.id" />
    </div>
</template>

<style>
.actus {
    margin-top: 2rem;
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center;
    gap: 2rem;
}
</style>