<script setup>
const props = defineProps({
    name: Array,
    firstname: Array,
    img: Object,
    subject: Array,
    link: Object,
});
</script>

<template>
    <section class="teacher">
        <figure class="teacher_figure">
            <img class="teacher_figure-img" :src="img.url" :alt="img.alt" />
        </figure>
        <div class="teacher_name">
            <PrismicRichText class="teacher_name-name" :field="name" />
            <PrismicRichText class="teacher_name-firstname" :field="firstname" />
        </div>

        <PrismicRichText class="teacher_subject" :field="subject" />
        
    </section>
</template>

<style>
.teacher {
    border-radius: 20px;
    border: 3px solid var(--ORANGE, #FFA51D);
    width: fit-content;
}

.teacher_name {
    display: flex;
    gap: 5px;
    justify-content: center;
}

.teacher_subject {
    text-align: center;
}

.teacher_figure-img {
    margin: auto;
}
/*<a class="teacher_link">{{ link.url }}</a>*/
</style>
