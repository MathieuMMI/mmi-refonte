<template>
    <RouterLink to="/prof">Professeurs</RouterLink>
    <p></p>
    <RouterLink to="/FAQ">FAQ</RouterLink>
    <p></p>
    <RouterLink to="/">Accueil</RouterLink>
    <p></p>

    <div class="contact">
        <h2 class="contact__title">Une question?</h2>
        <p class="contact__paragraph">La moindre interrogation ? Un message à nous faire passer ? C'est par ici que ça se
            passe. </p>
    </div>
    <div class="contact-container">
        <div class="contact-container--flex">
            <p>Pour nous rencontrer, nous vous donnons rendez-vous lors des journées portes ouvertes le samedi 19 janvier
                2024
                ou lors de notre defis 24h le 14 mars 2024.</p>
            <MyEllipse />
        </div>
        <div class="contact-container--flex">
            <MyEllipse />
            <p>En attendant, si vous avez ne serait-ce qu'une question, n'hésitez pas à nous contacter !</p>
        </div>
        <form @submit.prevent="sendEmail">
            <div class="form-group">
                <label for="name">Nom:</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div class="form-group">
                <label for="email">Sujet:</label>
                <input type="text" id="email" v-model="subject" required>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message" required></textarea>
            </div>
            <button type="submit">Envoyer</button>
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

<style scoped>
.contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
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

button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #0069d9;
}
</style>
