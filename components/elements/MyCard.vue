<script setup>

</script>
<template>
    <div class="content">
        <div class="parcoursup">
            <h2 class="parcoursup__title">Parcoursup</h2>
            <p class="parcoursup__text">L'inscription sur Parcoursup est simple et intuitive. Rendez-vous sur notre site
                web,
                créez votre compte, et commencez à explorer les nombreuses possibilités qui s'offrent à vous.</p>
            <p class="parcoursup__text">Remplissez soigneusement votre dossier en mettant en avant vos compétences, votre
                parcours scolaire et vos projets d'avenir.
            </p>
            <p class="parcoursup__text"> L'équipe Parcoursup est là pour vous accompagner à chaque étape, garantissant ainsi
                un
                processus transparent et
                équitable.</p>
            <div class="parcoursup__button">
                <MyButton href="test" label="CANDIDATURE PARCOURSUP" color="white" font="melodrama" size="big" />
            </div>

        </div>
        <div class="ecandidat">
            <h2 class="ecandidat__title">E-candidat</h2>
            <p class="ecandidat__text"> L'inscription sur e-candidat est le premier pas vers de nouvelles opportunités
                passionnantes.</p>
            <p class="ecandidat__text">Ne tardez pas et rejoignez-nous dès maintenant. Nous sommes impatients de faire
                partie de
                votre parcours vers le succès. </p>
            <p class="ecandidat__text"> Inscrivez-vous aujourd'hui et ouvrez la porte à un avenir prometteur sur e-candidat
                !
            </p>
            <div class="ecandidat__button">
                <MyButton href="test" label="CANDIDATURE E-CANDIDAT" color="border" font="melodrama" size="big" />
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(76);
}


.parcoursup {
    background-color: $black;
    border: none;
    border-radius: rem(18);
    color: $white;
    font-size: $body;
    margin-left: rem(102);

    &__title {
        font-weight: bold;
        font-size: $h2;
        margin: rem(52);
        font-family: $font-satoshi-bold;
    }

    &__text {
        margin: rem(52);
        font-family: $font-satoshi;

    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: rem(40);
    }
}

.ecandidat {
    border: rem(2) solid $secondary-color;
    border-radius: rem(18);
    color: $secondary-color;
    margin-right: rem(102);
    font-size: $body;


    &__title {
        font-weight: bold;
        font-size: $h2;
        margin: rem(52);
        font-family: $font-satoshi-bold;


    }

    &__text {
        margin: rem(52);
        font-family: $font-satoshi;

    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: rem(40);
    }
}
</style>