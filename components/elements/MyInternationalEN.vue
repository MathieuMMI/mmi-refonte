<script setup>

</script>
<template>
    <div class="international">
        <div class="international__canada">
            <p class="international__canada--body--bold">Canada</p>
            <p class="international__canada--body--ville">Montreal / Matane</p>
            <div class="international__canada--line"></div>
        </div>
        <div class="international__espagne">
            <p class="international__espagne--body--bold">Spain</p>
            <p class="international__espagne--body--ville">Barcelona</p>
            <div class="international__espagne--line"></div>
        </div>
        <div class="international__map">
            <MyMap class="international__map--ordi" />
            <MyMapMobile class="international__map--mobile" />
        </div>

        <div class="international__inde">
            <p class="international__inde--body--bold">India</p>
            <div class="international__inde--line"></div>
        </div>
        <div class="international__australie">
            <p class="international__australie--body--bold">India</p>
            <div class="international__australie--line"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.international {
    color: $secondary-color;
    font-size: $body;
    text-align: center;
    position: relative;
    padding: rem(64);

    &__map {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

        &--ordi {
            display: block;
        }

        &--mobile {
            display: none;
        }
    }


    &__canada {
        border: 1px solid $primary-color;
        border-radius: rem(10);
        padding: rem(2);
        width: 15%;
        position: absolute;
        left: 20rem;
        top: 0;

        &--body {

            &--bold {
                font-weight: bold;
                font-family: $font-satoshi-bold;
            }
        }

        &--line {
            position: absolute;
            background-color: $primary-color;
            height: rem(160);
            width: 1px;
            left: 50%;
            bottom: rem(-160);
        }
    }

    &__espagne {
        border: 1px solid $primary-color;
        border-radius: rem(10);
        padding: rem(2);
        width: 10%;
        position: absolute;
        left: 40rem;
        top: 0;

        &--body {

            &--bold {
                font-weight: bold;
                font-family: $font-satoshi-bold;
            }
        }

        &--line {
            position: absolute;
            background-color: $primary-color;
            height: rem(220);
            width: 1px;
            left: 50%;
            bottom: rem(-220);
        }
    }

    &__inde {
        border: 1px solid $primary-color;
        border-radius: rem(10);
        padding: rem(2);
        width: 10%;
        position: absolute;
        bottom: 4rem;
        right: 30rem;

        &--body {
            &--bold {
                font-weight: bold;
                font-family: $font-satoshi-bold;
            }
        }

        &--line {
            position: absolute;
            background-color: $primary-color;
            height: rem(220);
            width: 1px;
            left: 50%;
            top: rem(-220);
        }
    }

    &__australie {
        border: 1px solid $primary-color;
        border-radius: rem(10);
        padding: rem(2);
        width: 10%;
        position: absolute;
        bottom: 0;
        right: 20rem;

        &--body {
            &--bold {
                font-weight: bold;
                font-family: $font-satoshi-bold;
            }
        }

        &--line {
            position: absolute;
            background-color: $primary-color;
            height: rem(150);
            width: 1px;
            left: 50%;
            top: rem(-150);
        }
    }


}



@media screen and (min-width: 1920px) {
    .international {
        color: $secondary-color;
        font-size: $body;
        text-align: center;
        position: relative;
        padding: rem(64);

        &__map {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

            &--ordi {
                display: block;
            }

            &--mobile {
                display: none;
            }
        }


        &__canada {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: 15%;
            position: absolute;
            left: 30rem;
            top: 0;

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(160);
                width: 1px;
                left: 50%;
                bottom: rem(-160);
            }
        }

        &__espagne {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: 10%;
            position: absolute;
            left: 51rem;
            top: 0;

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(220);
                width: 1px;
                left: 50%;
                bottom: rem(-220);
            }
        }

        &__inde {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: 10%;
            position: absolute;
            bottom: 4rem;
            right: 41rem;

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(220);
                width: 1px;
                left: 50%;
                top: rem(-220);
            }
        }

        &__australie {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: 10%;
            position: absolute;
            bottom: 0;
            right: 31rem;

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(150);
                width: 1px;
                left: 50%;
                top: rem(-150);
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .international {
        color: $secondary-color;
        font-size: $mobile-body;
        text-align: center;
        position: relative;
        padding: rem(0);

        &__map {
            &--ordi {
                display: none;
            }

            &--mobile {
                display: block;
                width: 100%;
            }
        }

        &__canada {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(3);
            position: absolute;
            left: rem(32);
            top: rem(-48);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(80);
                width: 1px;
                left: 50%;
                bottom: rem(-80);
            }
        }

        &__espagne {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);

            position: absolute;
            left: rem(137.6);
            top: rem(-64);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                    // width: rem(128);

                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(115);
                width: 1px;
                left: 50%;
                bottom: rem(-115);
            }
        }

        &__inde {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            position: absolute;
            bottom: 0;
            right: rem(100);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(64);
                width: 1px;
                left: 50%;
                top: rem(-64);
            }
        }

        &__australie {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);
            position: absolute;
            bottom: rem(-16);
            right: rem(32);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(32);
                width: 1px;
                left: 50%;
                top: rem(-32);
            }
        }

    }

}

@media screen and (max-width: 430px) {
    .international {
        color: $secondary-color;
        font-size: $mobile-body;
        text-align: center;
        position: relative;
        padding: rem(0);

        &__map {
            &--ordi {
                display: none;
            }

            &--mobile {
                display: block;
                width: 100%;
            }
        }

        &__canada {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(3);
            position: absolute;
            left: rem(64);
            top: rem(-48);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(80);
                width: 1px;
                left: 50%;
                bottom: rem(-80);
            }
        }

        &__espagne {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);

            position: absolute;
            left: rem(160);
            top: rem(-64);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                    // width: rem(128);

                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(115);
                width: 1px;
                left: 50%;
                bottom: rem(-115);
            }
        }

        &__inde {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            position: absolute;
            bottom: 0;
            right: rem(115);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(64);
                width: 1px;
                left: 50%;
                top: rem(-64);
            }
        }

        &__australie {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);
            position: absolute;
            bottom: rem(-16);
            right: rem(48);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(32);
                width: 1px;
                left: 50%;
                top: rem(-32);
            }
        }

    }

}



@media screen and (max-width: 391px) {
    .international {
        color: $secondary-color;
        font-size: $mobile-body;
        text-align: center;
        position: relative;
        padding: rem(0);

        &__map {
            &--ordi {
                display: none;
            }

            &--mobile {
                display: block;
                width: 100%;
            }
        }

        &__canada {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(3);
            position: absolute;
            left: rem(32);
            top: rem(-48);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(80);
                width: 1px;
                left: 50%;
                bottom: rem(-80);
            }
        }

        &__espagne {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);

            position: absolute;
            left: rem(144);
            top: rem(-64);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                    // width: rem(128);

                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(115);
                width: 1px;
                left: 50%;
                bottom: rem(-115);
            }
        }

        &__inde {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            position: absolute;
            bottom: 0;
            right: rem(108);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(64);
                width: 1px;
                left: 50%;
                top: rem(-64);
            }
        }

        &__australie {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);
            position: absolute;
            bottom: rem(-16);
            right: rem(32);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(32);
                width: 1px;
                left: 50%;
                top: rem(-32);
            }
        }

    }

}



@media screen and (max-width: 376px) {
    .international {
        color: $secondary-color;
        font-size: $mobile-body;
        text-align: center;
        position: relative;
        padding: rem(0);

        &__map {
            &--ordi {
                display: none;
            }

            &--mobile {
                display: block;
                width: 100%;
            }
        }

        &__canada {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(3);
            position: absolute;
            left: rem(32);
            top: rem(-48);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(80);
                width: 1px;
                left: 50%;
                bottom: rem(-80);
            }
        }

        &__espagne {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);

            position: absolute;
            left: rem(137.6);
            top: rem(-64);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                    // width: rem(128);

                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(115);
                width: 1px;
                left: 50%;
                bottom: rem(-115);
            }
        }

        &__inde {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            position: absolute;
            bottom: 0;
            right: rem(100);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(64);
                width: 1px;
                left: 50%;
                top: rem(-64);
            }
        }

        &__australie {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);
            position: absolute;
            bottom: rem(-16);
            right: rem(32);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(32);
                width: 1px;
                left: 50%;
                top: rem(-32);
            }
        }

    }

}


@media screen and (max-width: 330px) {
    .international {
        color: $secondary-color;
        font-size: $mobile-body;
        text-align: center;
        position: relative;
        padding: rem(0);

        &__map {
            &--ordi {
                display: none;
            }

            &--mobile {
                display: block;
                width: 100%;
            }
        }

        &__canada {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(3);
            position: absolute;
            left: rem(32);
            top: rem(-48);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(80);
                width: 1px;
                left: 50%;
                bottom: rem(-80);
            }
        }

        &__espagne {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);

            position: absolute;
            left: rem(112);
            top: rem(-60.8);

            &--body {

                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                    // width: rem(128);

                }

                &--ville {
                    display: none;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(115);
                width: 1px;
                left: 50%;
                bottom: rem(-115);
            }
        }

        &__inde {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            position: absolute;
            bottom: 0;
            right: rem(84);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(64);
                width: 1px;
                left: 50%;
                top: rem(-64);
            }
        }

        &__australie {
            border: 1px solid $primary-color;
            border-radius: rem(10);
            padding: rem(2);
            width: rem(64);
            position: absolute;
            bottom: rem(-16);
            right: rem(16);

            &--body {
                &--bold {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;
                }
            }

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(32);
                width: 1px;
                left: 50%;
                top: rem(-32);
            }
        }
    }
}
</style>