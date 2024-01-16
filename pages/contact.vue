<script setup>
import { ref, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';
const isMenuVisible = ref(false);

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};

// Ajoute une classe au corps lorsque le menu est visible
const toggleBodyScroll = () => {
    const body = document.body;
    body.classList.toggle('no-scroll', isMenuVisible.value);
};

// Supprime la classe lors de la destruction du composant
onBeforeUnmount(() => {
    document.body.classList.remove('no-scroll');
});

// Utilise un watcher pour détecter les changements de isMenuVisible
watch(isMenuVisible, toggleBodyScroll);
const name = ref('');
const subject = ref('');
const message = ref('');

const sendEmail = () => {
    const body = `${message.value}`;
    window.location.href = `mailto:mathieubouque18@gmail.com?subject=${subject.value}&body=${body}`;
}
</script>

<template>
    <div class="template-contact">
        <header class="template-contact-header">
            <div class="template-contact-header_div" v-if="!isMenuVisible">
                <NuxtLink to="/" class="header__accueil">
                    <p class="header__accueil--content">Accueil</p>
                </NuxtLink>
                <MyMenuW @click="toggleMenu" />
            </div>
            <Menu v-if="isMenuVisible" @close="toggleMenu" />
        </header>
        <div class="contact">
            <h2 class="contact__title">Une question?</h2>
            <p class="contact__paragraph">La moindre interrogation ? Un message à nous faire passer ? C'est par ici que
                ça
                se
                passe. </p>
        </div>
        <div class="contact__flex">
            <p>Pour nous rencontrer, nous vous donnons rendez-vous lors des journées portes ouvertes le <strong>samedi
                    27 janvier 2024</strong> ou lors de notre defis 24h le <strong>14 mars 2024</strong></p>
            <MyEllipse color="primary2" size="small" class="contact__flex--ellipse" />
        </div>
        <div class="contact__flex">
            <MyEllipse color="primary2" size="tiny" class="contact__flex--ellipse1" />
            <p>En attendant, si vous avez ne serait-ce qu'une question, n'hésitez pas à nous contacter !</p>
        </div>
        <div class="contact__container">
            <form @submit.prevent="sendEmail">
                <input class="contact__container--form" type="text" id="name" v-model="name" placeholder="Nom" required>
                <input class="contact__container--form" type="text" id="email" v-model="subject" placeholder="Sujet"
                    required>
                <textarea class="contact__container--form--message" id="message" v-model="message" placeholder="Message"
                    required></textarea>
                <div class="contact__container--border">
                    <button class="contact__container--button" type="submit">Envoyer</button>
                </div>
            </form>
        </div>
        <footer>
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
                            <MyGoogleW />
                        </li>
                        <li>
                            <MyFacebookW />
                        </li>
                        <li>
                            <MyLinkedInW />
                        </li>
                        <li>
                            <MyInstagramW />
                        </li>
                        <li>
                            <MyXW />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
/*.menu {
    flex: 1;
    overflow-y: auto;
}

.no-scroll {
    overflow: hidden;
}
.contact-header {
    color: $white;
}

.contact-footer {
    color: $white;
    background: $black;
}*/

.template-contact {
    background-color: $black;
    color: white;

    &-header {
        color: $white;

        &_div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: rem(30);
            z-index: 2;
        }
    }

}


.header {

    &__accueil {
        text-decoration: none;
        border: rem(1) solid $white;
        border-radius: rem(32);
        padding: rem(16);

        &--content {
            color: $white;
            font-family: $font-satoshi-bold;
            margin-bottom: 0;
        }
    }
}

.contact {
    background-color: $black;
    color: $white;
    margin-left: rem(70);
    margin-bottom: rem(64);

    &__title {
        font-size: $h2;
        font-weight: bold;
    }

    &__paragraph {
        font-size: $body;
        font-weight: bold;
        width: rem(500);
        color: $grey;


    }

    &__container {
        background-color: $black;

        max-width: 600px;
        margin: 0 auto;
        padding: rem(20);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        &--form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 10px;
            width: rem(544);


            &--message {
                height: rem(128);
            }
        }

        &--border {
            margin: auto;
            width: 50%;
            align-items: center;
            display: flex;
        }

        &--button {
            background-color: $white;
            color: $black;
            border-radius: rem(64);
            padding: rem(16);
            padding-top: rem(8);
            padding-bottom: rem(8);
            width: rem(200);
            font-size: $button;
            transition: background-color 0.3s ease;
            margin: auto auto rem(50) auto;
            border: none;

            &:hover {
                background-color: $primary-color;
            }
        }
    }


    &__flex {
        background-color: $black;
        color: $white;
        font-size: $body;
        align-items: center;
        text-align: center;
        max-width: 588px;
        margin: 0 auto;
        position: relative;

        margin-bottom: rem(70);


        strong {
            font-family: $font-satoshi-bold;
        }

        &--ellipse {
            position: absolute;
            top: rem(-32);
            right: rem(-80);
        }

        &--ellipse1 {
            position: absolute;
            bottom: rem(-32);
            left: rem(-64);
        }

    }
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

p {
    margin-bottom: 10px;
}

form {
    display: flex;
    flex-direction: column;
    gap: rem(20);
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"],

textarea {
    padding: rem(10);
    border: rem(1) solid #ccc;
    border-radius: rem(20);
    font-size: 1rem;
    margin-bottom: 10px;
    background-color: $black;
    color: #FEFEFE;
}


.container {
    /*display: flex;*/
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.line {
    background-color: $white; // Adjust the color as needed
    height: 1px;
    width: 70%;
    margin: auto;
}

.footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    font-size: $body;
    background-color: $black;
    color: $white;

    &__left {
        padding: rem(20);
        margin-left: rem(256);
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
            color: $white;

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
        margin-bottom: rem(64);
    }

    &__right {

        &--link {
            text-decoration: none;
            color: $white;

            &:hover {
                color: $primary-color; // Change to your desired hover color
            }
        }
    }
}

@media screen and (max-width: 767px) {



    .header {

        &__accueil {
            text-decoration: none;
            border: rem(1) solid $white;
            border-radius: rem(32);
            padding: rem(16);

            &--content {
                color: $white;
                font-family: $font-satoshi-bold;
                margin-bottom: 0;
            }
        }
    }

    .template-contact {
        background-color: $black;
        color: white;
        overflow: hidden;

        &-header {
            color: $white;

            &_div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: rem(30);
                z-index: 2;
            }
        }

    }

    .contact {
        background-color: $black;
        color: $white;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;


        margin-left: rem(0);
        margin-bottom: rem(64);

        &__title {
            font-size: $mobile-h1;
            font-weight: bold;
        }

        &__paragraph {
            font-size: $mobile-body;
            font-weight: bold;
            width: rem(320);
            color: $grey;
            text-align: center;

        }

        &__container {
            background-color: $black;

            max-width: 80%;
            margin: 0 auto;
            padding: rem(0);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            &--form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;
                width: rem(320);


                &--message {
                    height: rem(128);
                }
            }

            &--border {

                margin: auto;
                width: 50%;
                margin-bottom: rem(64);

            }

            &--button {
                background-color: $white;
                color: $black;
                border: none;
                border-radius: rem(64);
                padding: rem(16);
                font-size: rem(20);
                transition: background-color 0.3s ease;
                padding-top: rem(8);
                padding-bottom: rem(8);

                &:hover {
                    background-color: $primary-color;
                }
            }
        }


        &__flex {
            background-color: $black;
            color: $white;
            font-size: $body;
            align-items: center;
            text-align: center;
            max-width: 300px;
            margin: 0 auto;
            position: relative;

            margin-bottom: rem(70);


            strong {
                font-family: $font-satoshi-bold;
            }

            &--ellipse {
                position: absolute;
                top: rem(-112);
                right: rem(-32);
            }

            &--ellipse1 {
                position: absolute;
                bottom: rem(-32);
                left: rem(-64);
            }

        }
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input[type="text"],

    textarea {
        padding: rem(5);
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        margin-bottom: 10px;
        height: rem(16);
        width: 100%;
    }


    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .line {
        background-color: $white; // Adjust the color as needed
        height: 1px;
        width: 70%;
        margin-bottom: rem(0);
    }

    .footer {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        font-size: $mobile-body;
        background-color: $black;
        color: $white;

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
                color: $white;

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
                color: $white;


                &:hover {
                    color: $primary-color; // Change to your desired hover color
                }
            }
        }
    }
}
</style>