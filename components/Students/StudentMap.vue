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
            top: rem(-243.2);
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
            top: rem(-160);

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
            top: rem(-96);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(84.8);
                width: 1px;
                left: 50%;
                bottom: rem(-84.8);
            }

        }

        &__japon {
            position: absolute;
            right: rem(0);
            bottom: rem(-64);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(112);
                width: 1px;
                left: 60%;
                top: rem(-80);
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
            top: rem(-96);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(88);
                width: 1px;
                left: 50%;
                bottom: rem(-88);
            }

        }

        &__japon {
            position: absolute;
            right: rem(16);
            bottom: rem(-64);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(112);
                width: 1px;
                left: 79%;
                top: rem(-80);
            }

        }

        &__canada {
            position: absolute;
            left: 0rem;
            top: -12rem;

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(166);
                width: 1px;
                left: 40%;
                bottom: rem(-166);
            }

        }

    }


}
</style>