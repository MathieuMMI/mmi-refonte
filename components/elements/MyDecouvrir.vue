<script setup>
defineProps({
    id: String,
    imageSrc: String,
    imageAlt: String,
    title: String,
    href: String,
});
</script>

<template>
    <div class="decouvrir">
        <div class="decouvrir_container">
            <img class="decouvrir_container--image" :src="imageSrc" :alt="imageAlt" />
        </div>

        <RouterLink :to="href" class="decouvrir__link">
            {{ title }}
        </RouterLink>
    </div>
</template>

<style lang="scss">
.decouvrir {
    text-align: center;

    &__container {

        &--image {
            margin-top: 0;
        }
    }

    &__link {
        color: $black;
        font-size: $body;
        font-weight: bold;
        font-family: $font-satoshi-bold;
        text-decoration: none;
        margin-top: rem(26);
    }
}
</style>