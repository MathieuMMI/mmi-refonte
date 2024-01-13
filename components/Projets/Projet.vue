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
    <div class="project">
        <router-link class="project__group" :to="`project/${projectid}`">
            <div class="project__group">
                <div class="project__groupe--left">
                    <PrismicRichText class="project__group--number" :field="number" />
                </div>
                <div class="project__group--right">
                    <PrismicRichText class="project__group--right--title" :field="title" />
                    <PrismicRichText class="project__group--right--year" :field="annee" />

                </div>
            </div>
        </router-link>
        <!--<a :href="link.url">Accéder au projet</a>-->
    </div>
    <div class="project__line"></div>
</template>

<style lang="scss">
.project {
    &__line {
        background-color: $white;
        height: 2px;
        width: 100%;
    }

    &__group {
        color: $white;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
        text-decoration: none;


        &--number {

            font-size: $h1;
            font-weight: bold;
            font-family: $font-satoshi-bold;

        }

        &--right {


            &--title {
                font-size: $body;
                font-weight: bold;
                margin-bottom: rem(10);
                font-family: $font-satoshi-bold;
            }


            &--link {
                text-decoration: none;
            }

        }
    }
}
</style>
