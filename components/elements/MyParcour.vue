<script setup>
defineProps({
    id: Number,
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
    <div class="parcour" :style="{ borderColor: couleurVariable }">
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
                <NuxtLink :to="href" class="parcour__button" :style="{ backgroundColor: couleurVariable }">DÉCOUVRIR
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.parcour {
    border-radius: rem(18);
    border: rem(1) solid;
    border-color: var(--couleurVariable);
    max-width: rem(410);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: rem(40);
    text-align: left;

    &__image {
        margin-top: rem(10);
    }

    &__content {
        margin-left: rem(20);
        margin-right: rem(20);
    }

    &__top {
        display: grid;
        grid-template-columns: auto 0.75fr;
        align-items: center;
        margin-top: rem(14);
        margin-bottom: rem(14);

        &--title {
            color: var(--couleurVariable);
            font-size: $body;
            font-style: normal;
            font-weight: bold;
            line-height: normal;
            font-family: $font-satoshi-bold;
        }

        &--line {
            background-color: var(--couleurVariable);
            height: 3px;
            width: 100%;
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
        padding: rem(20);
        margin-top: rem(30);
        margin-left: rem(30);
        margin-right: rem(30);
        margin-bottom: rem(30);
    }
}


@media screen and (max-width: 767px) {

    .parcour {
        border-radius: rem(18);
        border: rem(1) solid;
        border-color: var(--couleurVariable);
        max-width: rem(300);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: rem(0);

        text-align: left;

        &__image {
            margin: rem(10);

        }

        &__content {
            margin-left: rem(20);
            margin-right: rem(20);
        }

        &__top {
            display: grid;
            grid-template-columns: auto 0.75fr;
            align-items: center;

            &--title {
                color: var(--couleurVariable);
                font-size: $body;
                font-style: normal;
                font-weight: bold;
                line-height: normal;
                font-family: $font-satoshi-bold;
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
            padding: rem(16);
            margin-top: rem(20);
            margin-left: rem(0);
            margin-right: rem(0);
            margin-bottom: rem(20);
        }
    }

}
</style>
