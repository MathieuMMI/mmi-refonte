<script setup>
const props = defineProps({
    name: Array,
    firstname: Array,
    country: Array,
    img: Object,
    link: Object,
});
</script>

<template>
    <section class="student">
        <PrismicRichText class="student_country" :field="country" />
        <figure class="student_figure">
            <img class="student_figure-img" :src="img.url" :alt="img.alt" />
        </figure>
        <div class="student_name">
            <PrismicRichText class="student_name-name" :field="name" />
            <PrismicRichText class="student_name-firstname" :field="firstname" />
        </div>
        <a :href="link.url">Voir son linkedin</a>
    </section>
</template>

<style>
.student {
    border-radius: 20px;
    border: 3px solid var(--ORANGE, #FFA51D);
    width: fit-content;
}

.student_name {
    display: flex;
    gap: 5px;
    justify-content: center;
}

.student_figure-img {
    margin: auto;
}
</style>
