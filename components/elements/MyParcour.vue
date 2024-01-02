<script setup>
defineProps({
    id: String,
    imageSrc: String,
    imageAlt: String,
    title: String,
    text: String,
    buttonLabel: String,
    href: String,
    couleurVariable: String, // Ajout de la prop couleurVariable
});

// Suppression de la fonction couleurVariable, utilisez directement this.couleurVariable dans le style
</script>

<template>
    <div class="parcour">
        <div class="parcour__image">
            <img :src="imageSrc" :alt="imageAlt" />
        </div>
        <div class="parcour__content">
            <div class="parcour__top">
                <p class="parcour__top--title" :style="{ color: couleurVariable }">{{ title }}</p>
                <div class="parcour__top--line" :style="{ backgroundColor: couleurVariable }"></div>
            </div>
            <div class="parcour__text">
                <p class="parcour__text">{{ text }}</p>
            </div>
            <div class="parcour__button">
                <RouterLink :to="href" class="parcour__button" :style="{ backgroundColor: couleurVariable }">DÉCOUVRIR
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.parcour {
    border-radius: rem(18);
    border: rem(1) solid;
    border-color: var(--couleurVariable);
    max-width: rem(410);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__image {
        margin-top: rem(10);
    }

    &__content {
        margin-left: rem(20);
        margin-right: rem(20);
    }

    &__top {
        display: grid;
        grid-template-columns: 1fr 0.75fr;
        align-items: center;

        &--title {
            color: var(--couleurVariable);
            font-size: $body;
            font-style: normal;
            font-weight: bold;
            line-height: normal;
        }

        &--line {
            background-color: var(--couleurVariable);
            height: 3px;
            width: 90%;
        }
    }

    &__text {
        margin-top: rem(6);
        font-size: $body;
        color: $black;
    }

    &__button {
        background-color: var(--couleurVariable);
        border-radius: rem(31);
        color: $white;
        font-size: $body;
        font-weight: bold;
        text-decoration: none;
        text-align: center;
        padding: rem(10);
        margin-top: rem(20);
        margin-left: rem(30);
        margin-right: rem(30);
        margin-bottom: rem(20);
    }
}
</style>
