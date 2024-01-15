<script setup>
defineProps({
    id: Number,
    imageSrc: String,
    imageSrcM: String,
    imageAlt: String,
    title: String,
    href: String,
});
</script>

<template>
    <div class="decouvrir">
        <div class="decouvrir__container">
            <img class="decouvrir__container--image" :src="imageSrc" :alt="imageAlt" />
            <img class="decouvrir__container--mobile" :src="imageSrcM" :alt="imageAlt" />
        </div>

        <NuxtLink :to="href" class="decouvrir__link">
            {{ title }}
        </NuxtLink>
    </div>
</template>


<style lang="scss" scoped>
.decouvrir {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    &__container {

        &--image {
            margin-top: 0;
            display: block;
        }

        &--mobile {
            margin-top: 0;
            display: none;
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

    @media screen and (max-width: 767px) {
        &__container {

            &--image {
                margin-top: 0;
                display: none;
            }

            &--mobile {
                margin-top: 0;
                display: block;
            }
        }

        &__link {
            color: $black;
            font-size: $mobile-body;
            font-weight: bold;
            font-family: $font-satoshi-bold;
            text-decoration: none;
            margin-top: rem(26);
        }
    }
}
</style>