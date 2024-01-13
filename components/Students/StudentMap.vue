<script setup>

</script>
<template>
    <div class="international">
        <div class="international__portugal">
            <StudentsPortugal />
            <div class="international__portugal--line"></div>
        </div>
        <div class="international__map">
            <MyMap />
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
</style>