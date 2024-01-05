<script setup>

</script>
<template>
    <div class="hero">
        <h1 class="hero__title">MMI</h1>
        <h1 class="hero__title">MONTBÉLIARD</h1>
        <p class="hero__paragraph">Vous former aux métiers du web : tel est l'objectif du BUT MMI. En trois ans, vous serez
            capable de concevoir et de réaliser des produits et services multimédia en ligne.
        </p>
        <MyButton href='/candidater' label="CANDIDATURE" color="secondary" size="big" class="hero__button" />
        <div class="hero__blue-line"></div>
        <img src="" alt="" class="hero__img">
        <h2 class="hero__h2">Métiers du Multimédia & de l'Internet</h2>
        <div class="hero__blue-line"></div>
    </div>

    <div class="cursus">
        <p class="cursus__paragraph">Ce cursus dispensé en formation initiale ou en <strong> alternance</strong> à partir de
            la deuxième année
            permet un accès direct à la vie <strong> professionnelle </strong>et autorise diverses poursuites d'études.</p>
    </div>
    <MyCursus />

    <div class="parcours">
        <h2 class="parcours__title">3 PARCOURS</h2>
        <p class="parcours__body">Tu es plutôt créa ? Comm ? Dev ?</p>
        <MyParcours />
    </div>

    <div class="decouvrir">
        <h2 class="decouvrir__title">EN DÉCOUVRIR DAVANTAGE</h2>
        <div class="decouvrir__arrow">
            <MyArrow />
            <p class="decouvrir__arrow--paragraph">Découvrez toutes les facettes de la formation.</p>
        </div>
    </div>
    <MyDecouvrirs />

    <div class="international">
        <h2 class="international__title--orange"> MMI À</h2>
        <h2 class="international__title">L'INTERNATIONAL</h2>
        <MyInternational />


        <div class="international__end">
            <div class="international__end--text">
                <p>Notre BUT offre aux étudiants la possibilité de suivre un semestre complet à l'étranger dans des CÉGEP
                    (collège
                    d'enseignement général et professionnel) partenaires au <strong>Canada</strong>.
                </p>
                <p> Les stages et les alternances sont également l'occasion de tenter la mobilité internationale.</p>
            </div>

            <MyButton href='/candidater' label="DÉCOUVRIR" color="border" />
            <MyEllipse size="regular" color="primary2" class="international__end--ellipse1" />
            <MyEllipse size="small" color="primary" class="international__end--ellipse2" />
        </div>
    </div>
</template>


<style lang="scss">
.hero {
    display: flex;
    flex-direction: column; // Pour aligner les éléments verticalement
    align-items: flex-start; // Alignement à gauche
    justify-content: space-between; // Pour espacer les éléments verticalement et aligner le bouton en bas

    margin-right: rem(77);

    &__title {
        font-size: $h1;
        font-weight: bold;
        color: $secondary-color;
        margin-left: rem(77);

    }

    &__paragraph {
        font-size: $body;
        line-height: 1.5;
        max-width: rem(580);
        margin-top: 20px;
        margin-left: rem(77);

    }

    &__button {
        align-self: flex-end;
    }

    &__blue-line {
        background-color: $secondary-color;
        height: 2px;
        width: 200%;
    }
}

.cursus {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;

    &__paragraph {
        font-size: $body;
        line-height: 1.5;
        max-width: rem(700);
        margin-top: 20px;

        strong {
            font-weight: bold;
        }
    }
}

.parcours {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    margin-left: rem(20);

    &__title {
        font-size: $h2;
        font-weight: bold;
    }

    &__body {
        color: $secondary-color;
        font-size: $body;
        font-weight: bold;
        margin-bottom: rem(20);
    }
}

.decouvrir {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    margin-top: rem(40);

    &__title {
        font-size: $h2;
        font-weight: bold;
        max-width: rem(700);

    }

    &__arrow {
        display: grid;
        grid-template-columns: 0.5fr 0.25fr;
        align-items: center;
        margin-left: rem(300);

        &--paragraph {
            width: rem(150);
            font-weight: bold;
        }
    }
}

.international {

    &__title {
        font-size: $h2;
        font-weight: bold;
        text-align: left;
        color: $black;
        margin-bottom: rem(20);

        &--orange {
            color: $primary-color;
            font-size: $h2;
            font-weight: bold;
            text-align: left;
        }
    }

    &__end {
        margin-top: rem(40);
        color: $black;
        text-align: left;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
        position: relative;

        &--text {
            margin-bottom: rem(20);

            strong {
                font-weight: bold;
            }
        }

        &--ellipse1 {
            position: absolute;
            right: rem(-96);
            top: 0rem;
        }

        &--ellipse2 {
            position: absolute;
            left: rem(-128);
            top: rem(-16);
        }
    }
}
</style>