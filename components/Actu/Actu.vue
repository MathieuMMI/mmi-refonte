<script setup>
const props = defineProps({
    actuid: String,
    title: Array,
    img: Object,
    hook: Array,
    desc: Array,
    date: Array,
});

</script>

<template>
    <section class="actu">
        <figure class="actu_figure"><!--:to="{ name: 'basket-edit-id', params: { id: basket.id } }" :to="`/actu/${id}`"-->
            <router-link :to="`actu/${actuid}`"><img class="actu_figure-img" :src="img.url" :alt="img.alt" /></router-link>
        </figure>
        <div class="actu_title">
            <PrismicRichText class="actu_title-title" :field="title" />
        </div>
        <PrismicRichText class="actu_desc" :field="desc" />
    </section>
</template>

<style>
.actu {
    border-radius: 20px;
    border: 3px solid var(--ORANGE, #FFA51D);
    width: fit-content;
}

.actu_title {
    display: flex;
    gap: 5px;
    justify-content: center;
}

.actu_desc {
    text-align: center;
}

.actu_figure-img {
    margin: auto;
}
</style>
