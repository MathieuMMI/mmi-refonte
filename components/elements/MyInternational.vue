<script setup>

</script>
<template>
    <div class="international">
        <div class="international__canada">
            <p class="international__canada--body--bold">Canada</p>
            <p class="international__canada--body--ville">Montréal / Matane</p>
            <div class="international__line--canada"></div>
        </div>
        <div class="international__espagne">
            <p class="international__espagne--body--bold">Espagne</p>
            <p class="international__espagne--body--ville">Barcelone</p>
            <div class="international__line--espagne"></div>
        </div>
        <div class="international__map">
            <MyMap class="international__map--ordi" />
            <MyMapMobile class="international__map--mobile" />
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
        left: 22%;
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
        left: rem(640);
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
        bottom: rem(64);
        right: rem(480);

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
        right: rem(320);

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
        }

        &__line {

            &--canada {
                position: absolute;
                background-color: $primary-color;
                height: rem(80);
                width: 1px;
                left: 50%;
                bottom: rem(-80);
            }

            &--espagne {
                position: absolute;
                background-color: $primary-color;
                height: rem(115);
                width: 1px;
                left: 50%;
                bottom: rem(-115);
            }

            &--inde {
                position: absolute;
                background-color: $primary-color;
                height: rem(64);
                width: 1px;
                left: 50%;
                top: rem(-64);
            }

            &--australie {
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
        }

        &__line {

            &--canada {
                position: absolute;
                background-color: $primary-color;
                height: rem(80);
                width: 1px;
                left: 50%;
                bottom: rem(-80);
            }

            &--espagne {
                position: absolute;
                background-color: $primary-color;
                height: rem(115);
                width: 1px;
                left: 50%;
                bottom: rem(-115);
            }

            &--inde {
                position: absolute;
                background-color: $primary-color;
                height: rem(64);
                width: 1px;
                left: 50%;
                top: rem(-64);
            }

            &--australie {
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