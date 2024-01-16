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
    <section>
        <PrismicRichText class="date" :field="date" />
        <div class="actu">
            <MyEllipse size="tiny" color="primary2" class="actu__ellipse" />
            <NuxtLink :to="`actu/${actuid}`" class="actu__content">
                <!-- <img class="actu_figure-img" :src="img.url" :alt="img.alt" /> -->
                <div class="actu__content--title">
                    <PrismicRichText class="actu__content--title" :field="title" />
                </div>
                <PrismicRichText class="actu__content--desc" :field="desc" />
            </NuxtLink>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.actu {
    border-radius: 20px;
    background-color: $black;
    width: rem(563);
    height: rem(389);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &__ellipse {
        position: absolute;
        top: 0rem;
        left: 0rem;
    }

    &__content {
        color: $white;
        font-family: $font-satoshi;
        text-decoration: none;
        text-align: center;

        &--title {
            font-family: $font-satoshi-bold;
            margin-bottom: rem(30);
        }

        &--desc {
            text-align: center;
        }
    }

    &__figure {
        &--img {
            margin: auto;
        }
    }
}


.date {
    font-family: $font-melodrama;
    font-size: $button;
    color: $secondary-color;
    border: rem(1) solid $secondary-color;
    border-radius: rem(32);
    padding: rem(8);
    width: rem(200);
    text-align: center;
    margin-bottom: rem(16);
}

@media screen and (max-width: 767px) {
    .actu {
        border-radius: 20px;
        background-color: $black;
        width: rem(311);
        height: rem(167);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        &__ellipse {
            position: absolute;
            top: -1rem;
            left: -1rem;
        }

        &__content {
            color: $white;
            font-family: $font-satoshi;
            text-decoration: none;
            text-align: center;

            &--title {
                font-family: $font-satoshi-bold;
                margin-bottom: rem(30);
            }

            &--desc {
                text-align: center;
            }
        }

        &__figure {
            &--img {
                margin: auto;
            }
        }
    }


    .date {
        font-family: $font-melodrama;
        font-size: $mobile-body;
        color: $secondary-color;
        border: rem(1) solid $secondary-color;
        border-radius: rem(32);
        padding: rem(8);
        width: rem(117);
        text-align: center;
        margin-bottom: rem(16);
    }

}
</style>
