<script setup>
const { client } = usePrismic()
const { data: news } = await useAsyncData('news', () => client.getAllByType('news'));
</script>

<template>
    <div class="page-container">
        <div class="actus">
            <Actu class="actus__actu" v-for="actu in news" :key="actu.news_id" :title="actu.data.news_title"
                :img="actu.data.news_img" :desc="actu.data.news_hook" :actuid="actu.id" />
        </div>
        <button class="plus">Plus d'actus</button>
    </div>
</template>

<style lang="scss">
.actus {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.plus {
    font-family: $font-melodrama;
    font-size: $button;
    color: $secondary-color;
    border: rem(1) solid $secondary-color;
    border-radius: rem(32);
    padding: rem(8);
    width: rem(200);
    text-align: center;
    margin-bottom: rem(16);
    background-color: $white;
}

.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(64);
}
</style>