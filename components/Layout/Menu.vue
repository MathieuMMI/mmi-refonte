<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(/* ... */);
const emits = defineEmits(/* ... */);

const closeMenu = () => {
    emits('close');
};
</script>

<template>
    <div class="page">

        <div class="menu">
            <h1 class="menu__num">01</h1>
            <nuxt-link to="/formation" class="menu__text">
                <p class="menu__text--title">La Formation</p>
                <p class="menu__text--paragraph">Découvrez le programme du BUT MMI </p>
            </nuxt-link>
            <img src="../../assets/menu_formation.jpg" alt="formation" class="menu__img">
            <MyCroix @click="closeMenu" />
        </div>
        <div class="menu-line"></div>
        <div class="menu">
            <h1 class="menu__num">02</h1>
            <div class="menu__right">
                <nuxt-link to="/departement" class="menu__text">
                    <p class="menu__text--title">Le Département</p>
                    <p class="menu__text--paragraph">Découvrez le département où étudient les MMI</p>
                </nuxt-link>
            </div>
            <img src="../../assets/menu_departement.jpg" alt="departement" class="menu__img">
        </div>
        <div class="menu-line"></div>
        <div class="menu">
            <h1 class="menu__num">03</h1>
            <div class="menu__right">
                <nuxt-link to="/extras" class="menu__text">
                    <p class="menu__text--title">Les Extras</p>
                    <p class="menu__text--paragraph">Nous proposons de nombreuses opportunités à l'étranger</p>
                </nuxt-link>

            </div>
            <img src="../../assets/menu_extra.jpg" alt="extras" class="menu__img">
        </div>
        <div class="menu-line"></div>
        <div class="menu">
            <h1 class="menu__num">04</h1>
            <div class="menu__right">
                <nuxt-link to="/espace-pro" class="menu__text">
                    <p class="menu__text--title">Espace pro</p>
                    <p class="menu__text--paragraph">Vous avez un projet ? Vous cherchez
                        Proposez vos offres aux étudiants</p>
                </nuxt-link>

            </div>
            <img src="../../assets/menu_espacepro.jpg" alt="espace pro" class="menu__img">
        </div>
        <div class="menu-line"></div>
        <div class="menu">
            <h1 class="menu__num">05</h1>
            <div class="menu__right">
                <nuxt-link to="/contact" class="menu__text">
                    <p class="menu__text--title">Contact</p>
                    <p class="menu__text--paragraph">Contactez-nous pour plus d'informations sur le BUT MMI</p>
                </nuxt-link>
            </div>
            <img src="../../assets/meun_contact.jpg" alt="contact" class="menu__img">
        </div>
        <div class="menu-line"></div>
        <nuxt-link to="/candidater">
            <MyButton color="white" label="CANDIDATURE" size="big" font="satoshib" />
        </nuxt-link>
    </div>
</template>

<style lang="scss">
.page {
    min-height: 100vh;
    background-color: $black;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
}

.menu {
    color: $white;
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr 0.2fr;
    justify-items: start;
    align-items: center;

    &__num {
        font-size: $h1;
        font-weight: bold;
        font-family: $font-satoshi-bold;
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


}

.menu-line {
    background-color: $white;
    height: 2px;
    width: 100%;
}
</style>