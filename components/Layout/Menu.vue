<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(/* ... */);
const emits = defineEmits(/* ... */);

const closeMenu = () => {
    emits('close');
};
</script>

<template>
    <div class="page">

        <MyCroix @click="closeMenu" class="page__croix" />


        <div class="menu">
            <h1 class="menu__num">01</h1>
            <NuxtLink @click="closeMenu" to="/formation" class="menu__text">
                <p class="menu__text--title">La Formation</p>
                <p class="menu__text--paragraph">Découvrez le programme du BUT MMI </p>
            </NuxtLink>
            <img src="../../assets/menu_formation.jpg" alt="formation" class="menu__img">
        </div>
        <div class="menu--line"></div>
        <div class="menu">
            <h1 class="menu__num">02</h1>
            <div class="menu__right">
                <NuxtLink @click="closeMenu" to="/departement" class="menu__text">
                    <p class="menu__text--title">Le Département</p>
                    <p class="menu__text--paragraph">Découvrez le département où étudient les MMI</p>
                </NuxtLink>
            </div>
            <img src="../../assets/menu_departement.jpg" alt="departement" class="menu__img">
        </div>
        <div class="menu--line"></div>
        <div class="menu">
            <h1 class="menu__num">03</h1>
            <div class="menu__right">
                <NuxtLink @click="closeMenu" to="/extras" class="menu__text">
                    <p class="menu__text--title">Les Extras</p>
                    <p class="menu__text--paragraph">Nous proposons de nombreuses opportunités à l'étranger</p>
                </NuxtLink>

            </div>
            <img src="../../assets/menu_extra.jpg" alt="extras" class="menu__img">
        </div>
        <div class="menu--line"></div>
        <div class="menu">
            <h1 class="menu__num">04</h1>
            <div class="menu__right">
                <NuxtLink @click="closeMenu" to="/espace-pro" class="menu__text">
                    <p class="menu__text--title">Espace pro</p>
                    <p class="menu__text--paragraph">Vous avez un projet ? Vous cherchez
                        Proposez vos offres aux étudiants</p>
                </NuxtLink>

            </div>
            <img src="../../assets/menu_espacepro.jpg" alt="espace pro" class="menu__img">
        </div>
        <div class="menu--line"></div>
        <div class="menu">
            <h1 class="menu__num">05</h1>
            <div class="menu__right">
                <NuxtLink @click="closeMenu" to="/contact" class="menu__text">
                    <p class="menu__text--title">Contact</p>
                    <p class="menu__text--paragraph">Contactez-nous pour plus d'informations sur le BUT MMI</p>
                </NuxtLink>
            </div>
            <img src="../../assets/meun_contact.jpg" alt="contact" class="menu__img">
        </div>
        <div class="menu--line"></div>
        <div class="menu__button">
            <NuxtLink @click="closeMenu" to="/candidater">
                <MyButton class="menu_button--left" color="white" label="CANDIDATURE" size="big" font="satoshib" />
            </NuxtLink>
            <NuxtLink @click="closeMenu" to="/en">
                <MyButton class="menu_button--right" color="white" label="EN" size="big" font="satoshib" />
            </NuxtLink>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.no-scroll {
    overflow: hidden;
}

.page {
    min-height: 100vh;
    background-color: $black;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    position: relative;

    &__croix {
        position: absolute;
        right: 5%;
        top: 5%;
    }
}

.menu {
    color: $white;
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;
    justify-items: start;
    align-items: center;

    &__num {
        font-size: $h1;
        font-weight: bold;
        font-family: $font-satoshi-bold;
        margin-left: rem(40);
    }

    &__right {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;

    }

    &__text {
        font-size: $body ;
        text-decoration: none;
        color: $white;

        &--title {
            font-weight: bold;
            margin-bottom: rem(5);
            font-family: $font-satoshi-bold;
        }
    }

    &--line {
        background-color: $white;
        height: 2px;
        width: 100%;
    }

    &__button {
        display: flex;
        justify-content: space-between;
        margin-left: rem(40);
        margin-right: rem(40);
        margin-bottom: rem(10);
        margin-top: rem(10);



    }
}


@media screen and (max-width: 767px) {
    .page {
        height: 100%;
        width: 100%;
        background-color: $black;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1px;
        position: relative;
        overflow: hidden;

        &__croix {
            position: block;
            right: rem(-4);
            top: 0;
            margin-left: auto;
            padding: rem(5);
        }
    }

    .menu {
        color: $white;
        display: grid;
        grid-template-columns: 0.5fr 1fr 1fr;
        justify-items: start;
        align-items: center;
        overflow: hidden;

        &__num {
            font-size: $mobile-h1;
            font-weight: bold;
            font-family: $font-satoshi-bold;
            margin-right: rem(10);
            margin-left: rem(16);
        }

        &__right {
            display: grid;
            grid-template-columns: 1fr auto;
            justify-content: space-between;

        }

        &__text {
            font-size: $mobile-body ;
            text-decoration: none;
            color: $white;

            &--title {
                font-weight: bold;
                margin-bottom: rem(5);
                font-family: $font-satoshi-bold;
            }
        }

        &--line {
            background-color: $white;
            height: 2px;
            width: 100%;
        }

        &__button {
            display: flex;
            justify-content: space-between;

            margin-left: rem(16);
            margin-right: rem(16);
            margin-bottom: 5%;
            margin-top: 5%;


        }
    }



}
</style>