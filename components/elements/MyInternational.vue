<script setup>

</script>
<template>
    <div class="international">
        <div class="international__canada">
            <p class="international__canada--body--bold">Canada</p>
            <p class="international__canada--body">Montréal / Matane</p>
            <div class="international__line--canada"></div>
        </div>
        <div class="international__espagne">
            <p class="international__espagne--body--bold">Espagne</p>
            <p class="international__espagne--body">Barcelone</p>
            <div class="international__line--espagne"></div>
        </div>
        <div class="international__map">
            <MyMap />
        </div>

        <div class="international__inde">
            <p class="international__inde--body--bold">Inde</p>
            <div class="international__line--inde"></div>
        </div>
        <div class="international__australie">
            <p class="international__australie--body--bold">Australie</p>
            <div class="international__line--australie"></div>
        </div>
    </div>
</template>
<style lang="scss">
.international {
    color: $secondary-color;
    font-size: $body;
    text-align: center;
    position: relative;
    padding: rem(64);

    &__canada {
        border: 1px solid $primary-color;
        border-radius: rem(10);
        padding: rem(2);
        width: 15%;
        position: absolute;
        left: 20%;
        top: 0;

        &--body {

            &--bold {
                font-weight: bold;
                font-family: $font-satoshi-bold;
            }
        }
    }

    &__espagne {
        border: 1px solid $primary-color;
        border-radius: rem(10);
        padding: rem(2);
        width: 10%;
        position: absolute;
        left: 42%;
        top: 0;

        &--body {

            &--bold {
                font-weight: bold;
                font-family: $font-satoshi-bold;
            }
        }
    }

    &__inde {
        border: 1px solid $primary-color;
        border-radius: rem(10);
        padding: rem(2);
        width: 10%;
        position: absolute;
        bottom: 10%;
        right: 31%;

        &--body {
            &--bold {
                font-weight: bold;
                font-family: $font-satoshi-bold;
            }
        }
    }

    &__australie {
        border: 1px solid $primary-color;
        border-radius: rem(10);
        padding: rem(2);
        width: 10%;
        position: absolute;
        bottom: 0;
        right: 20%;

        &--body {
            &--bold {
                font-weight: bold;
                font-family: $font-satoshi-bold;
            }
        }
    }

    &__line {

        &--canada {
            position: absolute;
            background-color: $primary-color;
            height: rem(160);
            width: 1px;
            left: 50%;
            bottom: rem(-160);
        }

        &--espagne {
            position: absolute;
            background-color: $primary-color;
            height: rem(220);
            width: 1px;
            left: 50%;
            bottom: rem(-220);
        }

        &--inde {
            position: absolute;
            background-color: $primary-color;
            height: rem(220);
            width: 1px;
            left: 50%;
            top: rem(-220);
        }

        &--australie {
            position: absolute;
            background-color: $primary-color;
            height: rem(150);
            width: 1px;
            left: 50%;
            top: rem(-150);
        }


    }
}
</style>