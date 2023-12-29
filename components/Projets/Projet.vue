<script setup>
const props = defineProps({
    projectid: String,
    number: Array,
    title: Array,
    annee: Array,
    link: Object,
});
</script>

<template>
    <section class="project">
        <router-link :to="`project/${projectid}`">
            <div class="project_group">
                <PrismicRichText class="project_group-number" :field="number" />
                <PrismicRichText class="project_group-title" :field="title" />
                <PrismicRichText class="project_group-year" :field="annee" />
            </div>
        </router-link>
    </section>
</template>

<style>
.project {
    border-radius: 20px;
    border: 3px solid var(--ORANGE, #FFA51D);
    width: fit-content;
}

.project_group {
    display: flex;
    gap: 5px;
    justify-content: center;
}
</style>
