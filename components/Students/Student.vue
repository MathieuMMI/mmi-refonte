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
        <PrismicRichText class="student__country" :field="country" />
        <figure class="student__figure">
            <img class="student__figure--img" :src="img.url" :alt="img.alt" />
        </figure>
        <div class="student__name">
            <PrismicRichText class="student__name--name" :field="name" />
            <PrismicRichText class="student__name--firstname" :field="firstname" />
        </div>
        <a class="student__linkedin" :href="link.url">Voir son linkedin</a>
    </section>
</template>

<style lang="scss">
.student {
    border-radius: 20px;
    border: 3px solid var(--ORANGE, #FFA51D);
    width: rem(200);
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;


    &__country {
        font-family: $font-satoshi-bold;
        color: $secondary-color;
        font-size: $body;
    }

    &__name {
        display: flex;
        gap: 5px;
        justify-content: center;
        font-family: $font-satoshi;
        color: $secondary-color;
        font-size: rem(18);
    }

    &__figure {
        margin: rem(16);

    }


    &__linkedin {
        font-size: rem(16);
    }
}

@media screen and (max-width: 767px) {
    .student {
        border-radius: 20px;
        border: 3px solid var(--ORANGE, #FFA51D);
        width: rem(140);
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;


        &__country {
            font-family: $font-satoshi-bold;
            color: $secondary-color;
            font-size: $mobile-body;
        }

        &__name {
            display: flex;
            gap: 5px;
            justify-content: center;
            font-family: $font-satoshi;
            color: $secondary-color;
            font-size: $mobile-body;
        }

        &__figure {
            margin: rem(16);

        }


        &__linkedin {
            font-size: $mobile-body;
        }
    }

}
</style>