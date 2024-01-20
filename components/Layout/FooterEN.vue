<template>
    <footer>
        <div class="container">
            <div class="line"></div>

            <div class="footer">
                <div class="footer__left">
                    <p class="footer__title">MONTBELIARD MULTIMEDIA & INTERNET PROFESSIONS DEPARTMENT</p>
                    <p class="footer__mail">
                        Mail BUT MMI :
                        <a href="mailto:but-mmi-montbeliard@univ-fcomte.fr" class="footer__mail--to">
                            but-mmi-montbeliard@univ-fcomte.fr</a>
                    </p>
                    <p class="footer__adresse">4 place Tharradin 25 200 Montbeliard</p>
                    <p class="footer__tel">Phone Number : +33 (0)3 81 99 47 34 </p>
                    <ul class="footer__liste">
                        <li>
                            <MyGoogle />
                        </li>
                        <li>
                            <a href="https://www.facebook.com/mmimontbeliard/?locale=fr_FR">
                                <MyFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/school/mmimontbeliard/?originalSubdomain=fr">
                                <MyLinkedIn />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mmi_montbeliard/">
                                <MyInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/MMImontbeliard?s=20">
                                <MyX />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__right">
                    <ul class="footer__right--menu">
                        <div>
                            <li>
                                <NuxtLink class="footer__right--link" to="/en">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="footer__right--link" to="/en/departement">Department</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="footer__right--link" to="/en/formation">Formation</NuxtLink>
                            </li>
                        </div>
                        <div>
                            <li>
                                <NuxtLink class="footer__right--link" to="/en/extras">The extras</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="footer__right--link" to="/en/contact">Contact</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="footer__right--link" to="/en/faq">FAQ</NuxtLink>
                            </li>
                        </div>
                        <li>
                            <NuxtLink class="footer__right--link" to="/en/mentions-legales">Legals mentions</NuxtLink>
                        </li>
                    </ul>
                    <MyLogo class="footer__logo" />
                </div>
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
    overflow: hidden;
}

.line {
    background-color: $secondary-color; // Adjust the color as needed
    height: 1px;
    width: 80%;
    margin-bottom: rem(40);
    overflow: hidden;
}

.footer {
    display: flex;
    justify-items: space-between;
    align-items: space-between;
    margin-left: 20%;
    gap: 30%;
    font-size: $body-footer;
    width: 100%;
    overflow: hidden;

    &__left {
        margin: rem(0);
        margin-left: rem(0);
    }

    &__title {
        font-weight: bold;
        font-size: $body;
        margin-bottom: rem(20);
        font-family: $font-satoshi-bold;
        width: rem(500);

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
        margin-bottom: rem(32);
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

    &__logo {
        margin-bottom: rem(64);
        width: 65%;
    }
}

@media screen and (max-width: 767px) {

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .line {
        background-color: $secondary-color; // Adjust the color as needed
        height: 3px;
        width: 70%;
        margin-bottom: rem(40);
        overflow: hidden;
    }

    .footer {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        font-size: $mobile-body;
        width: 100%;
        margin-left: 10%;
        overflow: hidden;

        &__left {
            margin-left: 0;
            margin-bottom: rem(0);
            width: auto;
        }

        &__title {
            font-weight: bold;
            margin-bottom: rem(20);
            font-family: $font-satoshi-bold;
            width: 80%;
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
            flex-direction: column;
            gap: rem(32);
            margin-bottom: rem(16);


            &--menu {
                display: flex;
                justify-items: center;
                align-items: center;
                gap: 10%;
            }

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



