<script setup>
const { client } = usePrismic()
const { data: news } = await useAsyncData('news', () => client.getAllByType('news'));
console.log(news)
const allActus = ref(false);

const showAllActus = () => {
    allActus.value = true;
};

const showLessActus = () => {
    allActus.value = false;
};
</script>

<template>
    <div class="page-container">
        <div v-if="allActus">
            <div class="actus">
                <Actu class="actus__actu" v-for="actu in news" :key="actu.news_id" :title="actu.data.newsen_title"
                    :img="actu.data.news_img" :desc="actu.data.newsen_hook" :date="actu.data.newsen_date" :actuid="actu.id" />
            </div>
            <button @click="showLessActus" class="plus">Less news</button>
        </div>

        <div v-else>
            <div class="actus">
                <Actu class="actus__actu" v-for="(actu, index) in news.slice(0, 2).reverse()" :title="actu.data.newsen_title"
                    :img="actu.data.news_img" :desc="actu.data.newsen_hook" :date="actu.data.newsen_date" :actuid="actu.id" />
            </div>
            <button @click="showAllActus" class="plus">More news</button>
        </div>
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

@media screen and (max-width: 767px) {

    .actus {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }

    .plus {
        align-self: center;
        font-family: $font-melodrama;
        font-size: $mobile-body;
        color: $secondary-color;
        border: rem(1) solid $secondary-color;
        border-radius: rem(32);
        padding: rem(8);
        width: rem(155);
        text-align: center;
        margin-top: rem(20);
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

}
</style>