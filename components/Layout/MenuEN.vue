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

        <div class="menu">
            <h1 class="menu__num">01</h1>
            <NuxtLink @click="closeMenu" to="/en/formation" class="menu__text">
                <p class="menu__text--title">Formation</p>
                <p class="menu__text--paragraph">Discover the BUT MMI program</p>
            </NuxtLink>
            <img src="../../assets/menu_formation.jpg" alt="formation" class="menu__img">
            <MyCroix @click="closeMenu" />
        </div>
        <div class="menu-line"></div>
        <div class="menu">
            <h1 class="menu__num">02</h1>
            <div class="menu__right">
                <NuxtLink @click="closeMenu" to="/en/departement" class="menu__text">
                    <p class="menu__text--title">Department</p>
                    <p class="menu__text--paragraph">Discover the department where MMI students study</p>
                </NuxtLink>
            </div>
            <img src="../../assets/menu_departement.jpg" alt="departement" class="menu__img">
        </div>
        <div class="menu-line"></div>
        <div class="menu">
            <h1 class="menu__num">03</h1>
            <div class="menu__right">
                <NuxtLink @click="closeMenu" to="/en/extras" class="menu__text">
                    <p class="menu__text--title">The extras</p>
                    <p class="menu__text--paragraph">We offer a wide range of opportunities abroad</p>
                </NuxtLink>

            </div>
            <img src="../../assets/menu_extra.jpg" alt="extras" class="menu__img">
        </div>
        <div class="menu-line"></div>
        <div class="menu">
            <h1 class="menu__num">04</h1>
            <div class="menu__right">
                <NuxtLink @click="closeMenu" to="/en/espace-pro" class="menu__text">
                    <p class="menu__text--title">Professional space</p>
                    <p class="menu__text--paragraph">Do you have a project? Are you looking for
                        Submit your offers to students</p>
                </NuxtLink>

            </div>
            <img src="../../assets/menu_espacepro.jpg" alt="espace pro" class="menu__img">
        </div>
        <div class="menu-line"></div>
        <div class="menu">
            <h1 class="menu__num">05</h1>
            <div class="menu__right">
                <NuxtLink @click="closeMenu" to="/en/contact" class="menu__text">
                    <p class="menu__text--title">Contact</p>
                    <p class="menu__text--paragraph">Contact us for more information about BUT MMI</p>
                </NuxtLink>
            </div>
            <img src="../../assets/meun_contact.jpg" alt="contact" class="menu__img">
        </div>
        <div class="menu-line"></div>
        <div class="menu_button">
            <NuxtLink @click="closeMenu" to="/en/candidater">
                <MyButton color="white" label="CANDIDACY" size="big" font="satoshib" />
            </NuxtLink>
            <NuxtLink @click="closeMenu" to="/">
                <MyButton color="white" label="FR" size="big" font="satoshib" />
            </NuxtLink>
        </div>

    </div>
</template>

<style lang="scss">
.no-scroll {
    overflow:hidden;
}
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

.menu_button {
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 767px) {
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
        grid-template-columns: auto 0.75fr 0.5fr 0.2fr;
        justify-items: start;
        align-items: center;

        &__num {
            font-size: $mobile-h1;
            font-weight: bold;
            font-family: $font-satoshi-bold;
            margin-right: rem(10);
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
    }

    .menu-line {
        background-color: $white;
        height: 2px;
        width: 100%;
    }


}
</style>