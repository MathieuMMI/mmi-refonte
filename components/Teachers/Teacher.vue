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

        <figure class="teacher__figure">
            <img class="teacher__figure--img" :src="img.url" :alt="img.alt" />
            <div class="teacher__content">
                <div class="teacher__name">
                    <PrismicRichText class="teacher__name--firstname" :field="firstname" />
                    <PrismicRichText class="teacher__name--name" :field="name" />
                </div>

                <PrismicRichText class="teacher__subject" :field="subject" />
            </div>

        </figure>
    </section>
</template>

<style lang="scss">
.teacher {
    position: relative;

    &__name {
        display: flex;
        gap: 5px;
        justify-content: center;
        font-weight: bold;
        font-size: $body;
    }

    &__subject {
        text-align: center;
    }

    &__figure {
        position: relative;

        &--img {
            margin: auto;
            width: rem(500);

            /* Ajouter un effet de fondu au survol */
            transition: opacity 0.3s ease;
        }

        &:hover {
            &--img {
                opacity: 0.75;
            }

            /* Afficher le contenu au survol */
            .teacher__content {
                opacity: 0.75;
            }
        }
    }

    &__content {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 100%;
        transform: translate(-50%, 0);
        color: $white;
        text-align: center;
        background-color: $black;
        /* Cacher le contenu par défaut */
        opacity: 0;
        transition: opacity 0.3s ease;
        /* Ajouter une transition pour une apparition en douceur */
        padding-top: 80%;
        padding-bottom: 60%;
    }
}
</style>
