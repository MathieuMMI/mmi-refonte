<script setup>

</script>
<template>
    <div class="international">
        <div class="international__canada">
            <StudentsCanada />
            <div class="international__canada--line"></div>
        </div>
        <div class="international__portugal">
            <StudentsPortugal />
            <div class="international__portugal--line"></div>
        </div>
        <div class="international__map">
            <MyMap class="international__map--ordi" />
            <MyMapMobile class="international__map--mobile" />
        </div>
        <div class="international__japon">
            <StudentsJapon />
            <div class="international__japon--line"></div>
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
    overflow: hidden;

    &__map {
        &--ordi {
            display: block;
        }

        &--mobile {
            display: none;
        }
    }


    &__canada {
        position: absolute;
        left: 10rem;
        top: -16rem;

        &--line {
            position: absolute;
            background-color: $primary-color;
            height: rem(166);
            width: 1px;
            left: 50%;
            bottom: rem(-166);
        }

    }

    &__portugal {
        position: absolute;
        right: 32rem;
        top: -17rem;

        &--line {
            position: absolute;
            background-color: $primary-color;
            height: rem(224);
            width: 1px;
            left: 50%;
            bottom: rem(-224);
        }

    }

    &__japon {
        position: absolute;
        right: 7rem;
        bottom: -13rem;

        &--line {
            position: absolute;
            background-color: $primary-color;
            height: rem(275);
            width: 1px;
            left: 50%;
            top: rem(-232);
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
            }
        }

        &__canada {
            position: absolute;
            left: rem(0);
            top: rem(-192);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(134);
                width: 1px;
                left: 50%;
                bottom: rem(-134);
            }

        }

        &__portugal {
            position: absolute;
            right: rem(120);
            top: rem(-112);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(76.8);
                width: 1px;
                left: 50%;
                bottom: rem(-76.8);
            }

        }

        &__japon {
            position: absolute;
            right: rem(0);
            bottom: rem(-64);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(96);
                width: 1px;
                left: 60%;
                top: rem(-52.8);
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
                max-width: 100%;
            }
        }


        &__portugal {
            position: absolute;
            right: rem(104);
            top: rem(-112);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(80);
                width: 1px;
                left: 50%;
                bottom: rem(-80);
            }

        }

        &__japon {
            position: absolute;
            right: rem(16);
            bottom: rem(-64);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(97);
                width: 1px;
                left: 79%;
                top: rem(-56);
            }

        }

        &__canada {
            position: absolute;
            left: 1rem;
            top: -12rem;
            margin-top: rem(10);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(128);
                width: 1px;
                left: 30%;
                bottom: rem(-128);
            }

        }

    }


}
</style>