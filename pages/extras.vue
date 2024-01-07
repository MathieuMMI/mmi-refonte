<script setup>

</script>
<template>
    <div class="hero">
        <h2 class="hero__title">LES EXTRAS</h2>
        <p class="hero__paragraph">Tes raisons de choisir MMI Montbéliard !</p>
        <div class="hero__img">
            <div class="hero__img--left">
                <img src="../assets/extra1.jpg" alt="image offf">
                <img src="../assets/extra2.jpg" alt="image offf">
            </div>
            <div class="hero__img--right">
                <img src="../assets/extra3.jpg" alt="image canada">
                <img src="../assets/extra4.jpg" alt="image oeil">
            </div>
        </div>
    </div>

    <div class="canada">
        <h2 class="canada__title">Semestre au Canada</h2>
        <div class="canada__grid">
            <div class="canada__left">
                <img src="../assets/canada1.png" alt="" class="canada__left--img">
                <p class="canada__left--text">
                    Notre département est partenaire avec deux CEGEP canadiens. Chaque année, une dizaine d'étudiants MMI
                    effectue son troisième ou quatrième semestre dans l'une de ces formations.
                </p>
            </div>
            <div class="canada__right">
                <p class="canada__right--text">
                    À Montréal, Le CEGEP Vanier accueille nos étudiants pour un semestre de formation orienté vers les
                    travaux d'impression. Au CEGEP de Matane, nos étudiants peuvent intégrer le programme "techniques
                    d'intégration multimédia".
                </p>
                <img src="../assets/canada2.png" alt="" class="canada__right--img">
            </div>
        </div>
    </div>

    <div class="offf">
        <h2 class="offf__title">Le festival OFFF</h2>
        <div class="offf__blue-line"></div>
        <img src="" alt="" class="offf__img">
        <div class="offf__blue-line"></div>
        <p class="offf__paragraph">
            Notre département organise un déplacement à Barcelone à l'occasion du OFFF, festival
            international d'art digital.
            Nos étudiants enrichissent leur culture artistique en découvrant, d'une part, le travail des acteurs majeurs de
            la scène numérique internationale et d'autre part, la richesse culturelle de cette ville.</p>
    </div>

    <div class="defi">
        <div class="defi__text">
            <h2 class="defi__text--title">Le défis 24h</h2>
            <p class="defi__text--paragraph">
                Le principe est simple : réaliser une création multimédia autour d'un sujet
                donné dans un temps imparti, 24 heures. Pour corser les choses, l'évènement est ponctué d'un certain nombre
                de défis "surprise" ! Les locaux du département sont à votre disposition le temps de ce véritable challenge.
                Le défi 24h, c'est du rire, de l'émotion et des cascades !</p>
        </div>
        <img src="../assets/defi.jpg" alt="" class="defi__img">
    </div>

    <div class="stage">
        <h2 class="stage__title">Stage et Alternance</h2>
        <p class="stage__paragraph">Nous maintenons depuis plusieurs années des relations avec des <strong> partenaires
                extérieurs</strong>.
            Ainsi, nous offrons la possibilité à nos étudiants d'effectuer leur stage ainsi que leur alternance à
            l' <strong>étranger</strong>. Cette expérience unique et enrichissante leur permet d'améliorer leurs compétences
            <strong> linguistiques</strong>
            tout en approfondissant leurs connaissances <strong>techniques</strong>.
        </p>
    </div>


    <div class="projet">
        <div class="projet__left">
            <MyEllipse color="primary" size="small" class="projet__left--ellipse" />
            <h2 class="projet__left--title">Projets et </h2>
            <h2 class="projet__left--title">présentation de </h2>
            <h2 class="projet__left--title">projets étudiants</h2>
            <div class="projet__left--div"></div>
            <p class="projet__left--paragraph">Mise en application des connaissances acquises en cours, les projets sont
                pour les étudiants l'occasion de prouver leur savoir-faire. Toutes les étapes, de la réflexion au
                déploiement, sont autant d'étapes de validation pour mener les étudiants vers la réussite de leurs projets.
            </p>
            <p class="projet__left--paragraph"> Voici quelques projets des anciens étudiants du BUT MMI.</p>

        </div>
        <div class="projet__right">
            <Projets />
            <MyEllipse color="primary" size="regular" class="projet__right--ellipse" />
        </div>
    </div>

    <div class="international">
        <h2 class="international__title">Tu souhaites un jour travailler à l'international ?</h2>
        <div class="international__arrow">
            <MyArrow />
            <p class="international__arrow--paragraph">Découvrez nos anciens élèves.</p>
        </div>
        <Students />


    </div>
</template>
<style lang="scss" scoped>
.hero {
    margin-left: rem(70);

    &__title {
        color: $black;
        font-size: $h2;
        font-family: $font-satoshi-bold;
    }

    &__paragraph {
        font-family: $font-satoshi-bold;
        font-size: $body;
        color: #8B8BDC;
        margin-bottom: rem(30);
    }

    &__img {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        margin-bottom: rem(80);
    }
}


.canada {
    margin-left: rem(70);

    &__title {
        font-size: $h2;
        font-family: $font-satoshi-bold;

    }

    &__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: rem(40);
    }

    &__left {
        position: relative;

        &--img {
            margin-left: rem(80);
        }

        &--text {
            margin-top: rem(48);
            font-family: $font-satoshi;
            width: rem(524);
        }
    }

    &__right {
        &--text {
            font-family: $font-satoshi;
            width: rem(524);
            margin-bottom: rem(48);

        }

        &--img {
            margin-left: rem(-80);
            margin-top: rem(80);
        }
    }
}

.offf {

    &__title {
        margin-left: rem(70);
        font-size: $h2;
        font-family: $font-satoshi-bold;
    }

    &__blue-line {
        background-color: $secondary-color;
        height: 2px;
        width: 200%;
    }

    &__img {}

    &__paragraph {
        margin-left: rem(70);
        max-width: rem(678);
        margin-top: rem(40);
    }
}


.defi {
    margin-top: rem(80);
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    align-items: center;

    margin-left: rem(70);

    &__text {
        &--title {
            font-size: $h2;
            font-family: $font-satoshi-bold;
            margin-bottom: rem(64);
        }

        &--paragraph {
            max-width: rem(526);
        }
    }

    &__img {
        border: rem(2) solid $secondary-color;
        border-radius: rem(20);
    }
}


.stage {
    margin-top: rem(80);
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-bottom: rem(85);

    &__title {
        font-size: $h2;
        font-family: $font-satoshi-bold;
        margin-bottom: rem(64);
    }

    &__paragraph {
        max-width: rem(891);

        strong {
            font-family: $font-satoshi-bold;
        }
    }
}



.projet {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    background-color: $black;
    color: $white;
    height: 100vh;
    padding: rem(30);

    &__left {
        position: relative;
        margin-left: rem(20);
        margin-right: rem(40);


        &--ellipse {
            position: absolute;
            top: rem(-76);
            left: rem(-92);
        }

        &--title {
            font-size: $h2;
            font-weight: bold;
            font-family: $font-satoshi-bold;
        }

        &--paragraph {
            font-size: $body;
            padding-right: rem(50);
            margin-top: rem(50);
        }

        &--div {
            height: 20vh;
        }

    }

    &__right {
        position: relative;

        &--ellipse {
            position: absolute;
            bottom: rem(-128);
            left: rem(-120);
        }

    }
}

.international {
    color: $black;
    text-align: left;

    &__title {
        font-size: $h2;
        font-family: $font-satoshi-bold;

    }

    &__arrow {
        display: flex;
        align-items: center;
        justify-content: center;

        &--paragraph {
            width: rem(150);
            font-weight: bold;
            font-family: $font-satoshi-bold;

        }
    }
}
</style>