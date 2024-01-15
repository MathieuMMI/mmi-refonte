<script setup>

</script>
<template>
    <div class="international">
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


    &__portugal {
        position: absolute;
        right: 32rem;
        top: -15rem;

        &--line {
            position: absolute;
            background-color: $primary-color;
            height: rem(230);
            width: 1px;
            left: 50%;
            bottom: rem(-230);
        }

    }

    &__japon {
        position: absolute;
        right: 7rem;
        bottom: -10rem;

        &--line {
            position: absolute;
            background-color: $primary-color;
            height: rem(275);
            width: 1px;
            left: 50%;
            top: rem(-242);
        }

    }

}

@media screen and (max-width: 767px) {
    .international {
        color: $secondary-color;
        font-size: $mobile-body;
        text-align: center;
        position: relative;
        padding: rem(64);

        &__map {
            &--ordi {
                display: none;
            }

            &--mobile {
                display: block;
            }
        }


        &__portugal {
            position: absolute;
            right: rem(184);
            top: rem(-192);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(115);
                width: 1px;
                left: 50%;
                bottom: rem(-115);
            }

        }

        &__japon {
            position: absolute;
            right: rem(64);
            bottom: rem(-128);

            &--line {
                position: absolute;
                background-color: $primary-color;
                height: rem(102);
                width: 1px;
                left: 60%;
                top: rem(-68);
            }

        }

    }


}
</style>