<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const showFooterContent = route.name !== 'contact';
</script>
<template>
    <footer v-if="showFooterContent">
        <div class="container">
            <div class="line"></div>

            <div class="footer">
                <div class="footer__left">
                    <p class="footer__title">DÉPARTEMENT MÉTIERS DU MULTIMÉDIA & DE L'INTERNET DE MONTBÉLIARD</p>
                    <p class="footer__mail">
                        Mail BUT MMI :
                        <a href="mailto:but-mmi-montbeliard@univ-fcomte.fr" class="footer__mail--to">
                            but-mmi-montbeliard@univ-fcomte.fr</a>
                    </p>
                    <p class="footer__adresse">4 place Tharradin 25 200 Montbéliard</p>
                    <p class="footer__tel">Tél : +33 (0)3 81 99 47 34 </p>
                </div>

                <ul class="footer__right">
                    <div>
                        <li>
                            <NuxtLink class="footer__right--link" to="/">Accueil</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="footer__right--link" to="/departement">Département</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="footer__right--link" to="/formation">La Formation</NuxtLink>
                        </li>
                    </div>
                    <div>
                        <li>
                            <NuxtLink class="footer__right--link" to="/extras">Les Extras</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="footer__right--link" to="/contact">Contact</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="footer__right--link" to="/faq">FAQ</NuxtLink>
                        </li>
                    </div>
                    <li>
                        <NuxtLink class="footer__right--link" to="/mentions-legales">Mentions Légales</NuxtLink>
                    </li>
                </ul>
                <ul class="footer__liste">
                    <li>
                        <MyGoogle />
                    </li>
                    <li>
                        <MyFacebook />
                    </li>
                    <li>
                        <MyLinkedIn />
                    </li>
                    <li>
                        <MyInstagram />
                    </li>
                    <li>
                        <MyX />
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>



<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.line {
    background-color: $secondary-color; // Adjust the color as needed
    height: 3px;
    width: 70%;
    margin-bottom: rem(40);
}

.footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    font-size: $body;

    &__left {
        margin: rem(20);
    }

    &__title {
        font-weight: bold;
        margin-bottom: rem(20);
        font-family: $font-satoshi-bold;
    }

    &__mail {
        margin-bottom: rem(10);

        &--to {
            text-decoration: none;
            color: $black;

            &:hover {
                color: $primary-color; // Change to your desired hover color
            }
        }
    }

    &__adresse {
        margin-bottom: rem(10);
    }

    &__tel {
        margin-bottom: rem(20);
    }

    &__liste {
        display: flex;
        gap: rem(20); // Adjust the gap as needed
    }

    &__right {

        &--link {
            text-decoration: none;
            color: $black;

            &:hover {
                color: $primary-color; // Change to your desired hover color
            }
        }
    }
}

@media screen and (max-width: 767px) {

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .line {
        background-color: $secondary-color; // Adjust the color as needed
        height: 3px;
        width: 70%;
        margin-bottom: rem(40);
    }

    .footer {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        font-size: $mobile-body;

        &__left {
            margin-left: rem(20);
            margin-bottom: rem(0);
        }

        &__title {
            font-weight: bold;
            margin-bottom: rem(20);
            font-family: $font-satoshi-bold;
        }

        &__mail {
            margin-bottom: rem(10);

            &--to {
                text-decoration: none;
                color: $black;

                &:hover {
                    color: $primary-color; // Change to your desired hover color
                }
            }
        }

        &__adresse {
            margin-bottom: rem(10);
        }

        &__tel {
            margin-bottom: rem(20);
        }

        &__liste {
            display: flex;
            gap: rem(20); // Adjust the gap as needed
        }

        &__right {
            display: flex;
            gap: rem(32);
            margin-bottom: rem(16);

            li {
                margin-top: rem(16);
            }

            &--link {
                text-decoration: none;
                color: $black;


                &:hover {
                    color: $primary-color; // Change to your desired hover color
                }
            }
        }
    }
}
</style>

