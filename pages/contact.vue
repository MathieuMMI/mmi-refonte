<template>
    <div class="contact">
        <h2 class="contact__title">Une question?</h2>
        <p class="contact__paragraph">La moindre interrogation ? Un message à nous faire passer ? C'est par ici que ça se
            passe. </p>
    </div>
    <div class="contact__flex">
        <p>Pour nous rencontrer, nous vous donnons rendez-vous lors des journées portes ouvertes le samedi 19 janvier
            2024 ou lors de notre defis 24h le 14 mars 2024.</p>
        <MyEllipse color="primary2" size="small" class="contact__flex--ellipse" />
    </div>
    <div class="contact__flex">
        <MyEllipse color="primary2" size="tiny" class="contact__flex--ellipse1" />
        <p>En attendant, si vous avez ne serait-ce qu'une question, n'hésitez pas à nous contacter !</p>
    </div>
    <div class="contact__container">
        <form @submit.prevent="sendEmail">
            <input class="contact__container--form" type="text" id="name" v-model="name" placeholder="Nom" required>
            <input class="contact__container--form" type="text" id="email" v-model="subject" placeholder="Sujet" required>
            <textarea class="contact__container--form" id="message" v-model="message" placeholder="Message"
                required></textarea>
            <button class="contact__container--button" type="submit">Envoyer</button>
        </form>
    </div>
</template>

<script setup>
const name = ref('');
const subject = ref('');
const message = ref('');

const sendEmail = () => {
    const body = `${message.value}`;
    window.location.href = `mailto:mathieubouque18@gmail.com?subject=${subject.value}&body=${body}`;
}
</script>

<style lang="scss">
.contact {
    background-color: $white;
    color: $black;

    &__title {
        font-size: $h2;
        font-weight: bold;
    }

    &__paragraph {
        font-size: $body;
        font-weight: bold;


    }

    &__container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;

        &--form {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
        }

        &--button {
            background-color: $white;
            color: $black;
            border: none;
            border-radius: rem(18);
            padding: rem(5);
            width: 30%;
            font-size: $button;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: $primary-color;
            }
        }
    }

    &__flex {
        font-size: $body;
        align-items: center;
        text-align: center;
        max-width: 588px;
        margin: 0 auto;
        position: relative;

        margin-bottom: 20px;

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
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    margin-bottom: 10px;
}
</style>