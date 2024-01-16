<script setup>

</script>
<template>
    <div class="relative">
        <MyEllipse size="big" color="tri" class="relative__ellipse" />
        <MyEllipse size="medium" color="tri" class="relative__ellipse2" />
        <div class="dynamisme">
            <p class="dynamisme__title">Dynamism</p>
            <div class="dynamisme__line"></div>
        </div>
        <div class="professionnalisation">
            <p class="professionnalisation__title">Professionalization</p>
            <div class="professionnalisation__line"></div>
        </div>
        <div class="creativite">
            <p class="creativite__title">Creativity</p>
            <div class="creativite__line"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.ellipse.-medium {
    width: 100%;
}

.relative {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: $font-melodrama;

    &__ellipse2 {
        display: none;
    }
}

.dynamisme {
    color: $secondary-color;
    font-size: $h3;
    position: absolute;
    left: rem(400);
    top: rem(100);


    &__line {
        background-color: $secondary-color;
        height: 2px;
        width: 120%;
        position: absolute;
        left: rem(-100);
    }
}

.professionnalisation {
    color: $secondary-color;
    font-size: $h3;
    position: absolute;
    left: rem(300);
    bottom: rem(150);

    &__line {
        background-color: $secondary-color;
        height: 2px;
        width: 120%;
        position: absolute;
        left: rem(-150);
    }
}

.creativite {
    color: $secondary-color;
    font-size: $h3;
    position: absolute;
    right: rem(400);
    top: rem(280);

    &__line {
        background-color: $secondary-color;
        height: 2px;
        width: 120%;
        position: absolute;
        right: rem(-150);
    }
}


@media screen and (max-width: 767px) {

    .relative {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: $font-melodrama;

        &__ellipse {
            display: none;
        }

        &__ellipse2 {
            display: block;
        }
    }

    .dynamisme {
        color: $secondary-color;
        font-size: $mobile-body;
        position: absolute;
        left: rem(80);
        top: rem(70);


        &__line {
            background-color: $secondary-color;
            height: 2px;
            width: 120%;
            position: absolute;
            left: rem(-40);
        }
    }

    .professionnalisation {
        color: $secondary-color;
        font-size: $mobile-body;
        position: absolute;
        left: rem(80);
        bottom: rem(50);

        &__line {
            background-color: $secondary-color;
            height: 2px;
            width: 120%;
            position: absolute;
            left: rem(-40);
        }
    }

    .creativite {
        color: $secondary-color;
        font-size: $mobile-body;
        position: absolute;
        right: rem(50);
        top: rem(150);

        &__line {
            background-color: $secondary-color;
            height: 2px;
            width: 120%;
            position: absolute;
            right: rem(-40);
        }
    }
}
</style>