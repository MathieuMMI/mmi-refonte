<script setup>

</script>
<template>
    <div class="relative">
        <MyEllipse size="big" color="tri" class="ellipse" />
        <div class="dynamisme">
            <p class="dynamisme__title">Dynamisme</p>
            <div class="dynamisme__line"></div>
        </div>
        <div class="professionnalisation">
            <p class="professionnalisation__title">Professionnalisation</p>
            <div class="professionnalisation__line"></div>
        </div>
        <div class="creativite">
            <p class="creativite__title">Créativité</p>
            <div class="creativite__line"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.relative {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
</style>