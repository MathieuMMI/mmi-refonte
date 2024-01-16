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
                <NuxtLink to="/en" class="header__accueil">
                    <p class="header__accueil--content">Home</p>
                </NuxtLink>
                <MyMenuW @click="toggleMenu" />
            </div>
            <MenuEN v-if="isMenuVisible" @close="toggleMenu" />
        </header>
        <div class="contact">
            <h2 class="contact__title">A question ?</h2>
            <p class="contact__paragraph">Any questions? Do you have a message for us ? This is the place to do it.</p>
        </div>
        <div class="contact__flex">
            <p>We look forward to seeing you at our open house on <strong>Saturday
                    January 19 2024</strong> or at our 24-hour challenge on <strong>March 14, 2024</strong>.</p>
            <MyEllipse color="primary2" size="small" class="contact__flex--ellipse" />
        </div>
        <div class="contact__flex">
            <MyEllipse color="primary2" size="tiny" class="contact__flex--ellipse1" />
            <p>In the meantime, if you have any questions, please don't hesitate to contact us !</p>
        </div>
        <div class="contact__container">
            <form @submit.prevent="sendEmail">
                <input class="contact__container--form" type="text" id="name" v-model="name" placeholder="Name" required>
                <input class="contact__container--form" type="text" id="email" v-model="subject" placeholder="Email"
                    required>
                <textarea class="contact__container--form--message" id="message" v-model="message" placeholder="Message"
                    required></textarea>
                <div class="contact__container--border">
                    <button class="contact__container--button" type="submit">Submit</button>
                </div>
            </form>
        </div>
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
                        <p class="footer__tel">Tél : +33 (0)3 81 99 47 34 </p>
                    </div>

                    <ul class="footer__right">
                        <div>
                            <li>
                                <NuxtLink class="footer__right--link" to="/en/">Home</NuxtLink>
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
.actus {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.button {
    width: 100%;
    display: flex;

    &-plus {
        font-family: $font-melodrama;
        font-size: $button;
        color: $secondary-color;
        border: rem(1) solid $secondary-color;
        border-radius: rem(32);
        padding: rem(8);
        width: rem(200);
        margin: auto;
        text-align: center;
        margin-bottom: rem(16);
        margin-top: rem(16);
        background-color: $white;
    }
}

.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(64);
}

.actu__content--desc p {
    padding-left: rem(50);
    padding-right: rem(50);
}

@media screen and (max-width: 767px) {
    .actu__content--desc p {
        padding-left: rem(0);
        padding-right: rem(0);
    }

    .actus {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }

    .plus {
        align-self: center;
        font-family: $font-melodrama;
        font-size: $mobile-body;
        color: $secondary-color;
        border: rem(1) solid $secondary-color;
        border-radius: rem(32);
        padding: rem(8);
        width: rem(155);
        text-align: center;
        margin-top: rem(20);
        margin-bottom: rem(16);
        background-color: $white;

    }

    .page-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: rem(64);
    }

}</style>