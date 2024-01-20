<script setup>
const { client } = usePrismic()
const { data: news } = await useAsyncData('news', () => client.getAllByType('news'));

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
                <Actu class="actus__actu" v-for="actu in news" :key="actu.news_id" :title="actu.data.news_title"
                    :img="actu.data.news_img" :desc="actu.data.news_hook" :date="actu.data.news_date" :actuid="actu.id" />
            </div>
            <div class="button"><button @click="showLessActus" class="button-plus">Moins d'actus</button></div>
        </div>

        <div v-else>
            <div class="actus">
                <Actu class="actus__actu" v-for="(actu, index) in news.slice(0, 2).reverse()" :title="actu.data.news_title"
                    :img="actu.data.news_img" :desc="actu.data.news_hook" :date="actu.data.news_date" :actuid="actu.id" />
            </div>
            <div class="button"><button @click="showAllActus" class="button-plus">Plus d'actus</button></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.actus {
    margin-top: 2rem;
    margin-bottom: rem(50);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.button {
    width: 100%;
    display: flex;

    &-plus {
        font-family: $font-melodrama;
        font-size: $button;
        color: $secondary-color;
        border: rem(1) solid $secondary-color;
        border-radius: rem(32);
        padding: rem(8);
        width: rem(200);
        margin: auto;
        text-align: center;
        margin-bottom: rem(16);
        margin-top: rem(16);
        background-color: $white;
    }
}

.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(64);
}

.actu__content--desc p {
    padding-left: rem(50);
    padding-right: rem(50);
}

@media screen and (max-width: 767px) {
    .actu__content--desc p {
        padding-left: rem(0);
        padding-right: rem(0);
    }

    .actus {
        margin-top: 2rem;
        margin-bottom: rem(25);
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

}</style>