<script setup>

</script>
<template>
    <div class="hero">
        <h2 class="hero__title">LA FORMATION</h2>
        <p class="hero__paragraph">Passionne(é) par les métiers du web ?</p>
        <div class="hero__grid">
            <div class="hero__left">
                <img class="hero__left--img" src="../assets/foramtion1.jpg" alt="image formation">
                <img class="hero__left--img" src="../assets/formation2.jpg" alt="image formation">
            </div>
            <div class="hero__right">
                <img class="hero__right--img" src="../assets/formation3.jpg" alt="image formation">
                <img class="hero__right--img" src="../assets/formation4.jpg" alt="image formation">
            </div>
            <div>
                <h2 class="hero__content--title">Programme pédagogique</h2>
                <p class="hero__content--paragraph">Le BUT MMI est une formation pluridisciplinaire qui s'articule autour de
                    trois axes fondamentaux : le design, le développement et la communication. Inspirés par les pratiques
                    professionnelles, nous formons des étudiants polyvalents sur l'ensemble des corps de métier du web.
                </p>
            </div>
        </div>
    </div>
    <div class="bases">
        <MyEllipse color="primary" size="regular" class="bases__ellipse" />
        <div class="bases__body">
            <div class="bases__left">
                <h2 class="bases__left--title">Acquérir les bases</h2>
                <p class="bases__left--paragraph">
                    La communication orale est importante dans notre formation. Différents
                    exercices
                    de présentation vous permettront de perfectionner vos <strong>compétences communicationnelles</strong>.
                    Vous saurez alors
                    gérer votre stress, corriger vos tics gestuels et verbaux et améliorer votre prestance.
                </p>
                <p class="bases__left--paragraph">
                    Les cours d'<strong>expression artistique</strong> et esthétique vous donneront les bases pour réaliser
                    des designs
                    fonctionnels. Cet enseignement passe par l'apprentissage de l'histoire du graphisme, de ses pratiques et
                    par l'utilisation d'outils logiciels tels ceux proposés par la suite Adobe.
                </p>
            </div>
            <div class="bases__right">
                <p class="bases__right--paragraph">
                    Des enseignements dédiés au <strong>développement web</strong> traiteront des langages tels que HTML,
                    CSS3 et PHP.
                    D'autres langages, importants pour le développement d'applications (JAVA), seront également abordés.
                </p>

                <p class="bases__right--paragraph">
                    Le Projet Personnel et Professionnel est l'occasion de découvrir le <strong>milieu
                        professionnel</strong> du multimédia.
                    En dialoguant avec des <strong>professionnels</strong> du domaine, chaque étudiant peut alors déterminer
                    son choix
                    d'orientation selon ses compétences et ses aspirations.
                    Au cours de ce semestre, vous réaliserez votre premier projet individuel.
                </p>

                <p class="bases__right--paragraph">
                    La <strong>conception</strong> et le développement d'un site web mobile vous obligera à mettre en
                    pratique l'ensemble des
                    enseignements suivis durant les mois de septembre à décembre.
                </p>
                <MyEllipse color="primary" size="regular" class="bases__right--ellipse" />
            </div>
        </div>
    </div>
    <div class="fondamentaux">
        <h2 class="fondamentaux__title">Asseoir les fondamentaux</h2>
        <div class="fondamentaux__paragraph">
            <div class="fondamentaux__paragraph--left">
                <p class="fondamentaux__paragraph--text">
                    La réalisation de projets est au cœur de la formation MMI. Des travaux
                    concrets permettent d'éprouver
                    l'ensemble des compétences acquises durant le semestre 2. La créativité des étudiants s'exprime durant
                    les
                    cours de gestion de projets et leur capacité à travailler en équipe est évaluée à l'occasion d'un projet
                    collectif.
                </p>
                <p class="fondamentaux__paragraph--text">
                    Au cours de ce semestre, des professionnels expérimentés de l'intégration web vous guideront dans le
                    développement d'interfaces dynamiques fonctionnelles.
                </p>
            </div>
            <div class="fondamentaux__paragraph--right">
                <p class="fondamentaux__paragraph--text">
                    Vous renforcerez également vos compétences techniques à travers la
                    réalisation d'une application mobile ou
                    encore d'un site de data visualisation, des domaines essentiels qui constituent un véritable enjeu pour
                    le
                    web de demain.
                </p>
                <p class="fondamentaux__paragraph--text">
                    Vous découvrirez de nouveaux logiciels tels que Adobe Illustrator pour réaliser des illustrations et des
                    supports de communication. Les projets vidéo, quant à eux, vous permettront de maîtriser les logiciels
                    de
                    montage audio/vidéo comme Adobe Premiere ou encore Adobe Audition.
                </p>
            </div>
        </div>
    </div>

    <div class="parcours">
        <h2 class="parcours__title">3 parcours</h2>
        <div class="parcours__flex">
            <a href="parcours-crea" class="parcours__cn">
                <MyEllipse color="secondary" size="regular" />
                <p class="parcours__text">PARCOURS CRÉATION NUMÉRIQUE</p>
            </a>
            <a href="parcours-com" class="parcours__ceu">
                <MyEllipse color="primary" size="regular" />
                <p class="parcours__text">PARCOURS COMMUNICATION ET EXPERIENCE UTILISATEUR</p>
            </a>
            <a href="parcours-dev" class="parcours__dw">
                <MyEllipse color="black" size="regular" />
                <p class="parcours__text">PARCOURS DÉVELOPPEMENT WEB</p>
            </a>
        </div>
    </div>

    <div class="debouche">
        <h2 class="debouche__title">Les débouchées</h2>
        <MyDebouche class="debouche__ordi" />
        <MyDeboucheMobile class="debouche__mobile" />
    </div>
    <div class="candidature">
        <MyButton href='/candidater' label="CANDIDATURE" color="black" font="satoshi" />
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

    &__grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
    }


    &__content {
        &--title {
            font-size: $h2;
            font-family: $font-satoshi-bold;
            width: rem(461);

        }

        &--paragraph {
            margin-top: rem(32);
            width: rem(461);
            margin-bottom: rem(50);

        }
    }

}

.bases {
    background-color: $black;
    height: 100vh;
    color: $white;
    position: relative;

    &__ellipse {
        position: absolute;
        left: rem(-80);
        top: rem(-64);
    }

    &__body {
        display: grid;
        grid-template-columns: auto auto;
        margin-left: rem(100);
        margin-right: rem(100);
    }

    &__left {
        margin-top: rem(121);
        margin-bottom: rem(92);

        &--title {
            font-size: $h2;
            font-family: $font-satoshi-bold;
            width: rem(308);
            margin-bottom: rem(73);
        }

        &--paragraph {
            font-size: $body;
            font-family: $font-satoshi;
            margin-bottom: rem(30);

            strong {
                font-family: $font-satoshi-bold;
            }
        }
    }

    &__right {
        margin-top: rem(90);
        position: relative;

        &--paragraph {
            margin-bottom: rem(30);
            font-size: $body;
            font-family: $font-satoshi;
            margin-left: rem(75);

            strong {
                font-family: $font-satoshi-bold;
            }

        }

        &--ellipse {
            position: absolute;
            right: 0rem;
            bottom: 0rem;
        }
    }
}

.fondamentaux {
    margin-top: rem(80);

    &__title {
        color: $black;
        font-size: $h2;
        font-family: $font-satoshi-bold;
        text-align: center;
        margin-bottom: rem(80);
    }

    &__paragraph {
        display: grid;
        grid-template-columns: auto auto;
        margin-left: rem(95);
        margin-right: rem(95);
        font-family: $font-satoshi;

        &--left {
            margin-right: rem(40);
        }

        &--right {
            margin-left: rem(40);
        }

        &--text {
            margin-top: rem(16);
        }
    }
}


.parcours {
    margin-top: rem(48);
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;

    &__title {
        color: $black;
        font-size: $h2;
        font-family: $font-satoshi-bold;
        margin-bottom: rem(48);
    }

    &__flex {
        display: flex;
        align-items: center;
        justify-items: center;

    }

    &__cn {
        color: $secondary-color;
        width: rem(256);
        text-align: center;
        text-decoration: none;
    }

    &__ceu {
        color: $primary-color;
        width: rem(256);
        text-align: center;
        text-decoration: none;
        margin-top: rem(64);
    }

    &__dw {
        color: $black;
        width: rem(256);
        text-align: center;
        text-decoration: none;
    }

    &__text {
        font-family: $font-melodrama;

    }
}

.debouche {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;


    &__title {
        font-size: $h2;
        font-family: $font-satoshi-bold;
    }

    &__ordi {
        display: block;
    }

    &__mobile {
        display: none;
    }
}


.candidature {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: rem(64);
}

@media screen and (max-width: 767px) {


    .hero {
        margin-left: rem(0);

        &__title {
            color: $black;
            font-size: $mobile-h1;
            font-family: $font-satoshi-bold;
            text-align: center;
        }

        &__paragraph {
            font-family: $font-satoshi-bold;
            font-size: $mobile-body;
            color: #8B8BDC;
            margin-bottom: rem(30);
            text-align: center;
        }

        &__grid {
            display: flex;
            flex-direction: column;
            justify-items: center;
            align-items: center;
            gap: rem(32);

        }

        &__left {


            &--img {
                display: none;
            }
        }

        &__right {
            &--img {
                display: block;
                width: 100%;
                height: auto;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            gap: rem(32);

            &--title {

                font-size: $mobile-h2;
                font-family: $font-satoshi-bold;
                width: rem(271);
                text-align: center;

            }

            &--paragraph {
                margin-top: rem(32);
                max-width: rem(315);
                margin-bottom: rem(50);

            }
        }

    }

    .bases {
        background-color: $black;
        height: 120vh;
        color: $white;
        position: relative;


        &__ellipse {
            position: absolute;
            left: rem(-125);
            top: rem(-25);
        }

        &__body {

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            margin-left: rem(24);
            margin-right: rem(0);
            max-width: rem(342);

        }

        &__left {
            margin-top: rem(0);
            margin-bottom: rem(0);
            width: rem(250);

            &--title {
                font-size: $mobile-h2;
                font-family: $font-satoshi-bold;
                width: rem(308);
                margin-top: rem(52);

                margin-bottom: rem(73);
            }

            &--paragraph {
                font-size: $mobile-body;
                font-family: $font-satoshi;
                margin-bottom: rem(30);

                strong {
                    font-family: $font-satoshi-bold;
                }
            }
        }

        &__right {
            margin-top: rem(0);
            position: relative;
            width: rem(250);

            &--paragraph {
                margin-bottom: rem(30);
                margin-left: rem(0);
                font-size: $mobile-body;
                font-family: $font-satoshi;

                strong {
                    font-family: $font-satoshi-bold;
                }

            }

            &--ellipse {
                position: absolute;
                right: rem(-100);
                bottom: rem(-130);
            }
        }
    }

    .fondamentaux {
        margin-top: rem(80);
        margin-left: rem(0);

        &__title {
            color: $black;
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            text-align: center;
            margin-bottom: rem(50);
        }

        &__paragraph {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-right: rem(39);
            font-family: $font-satoshi;
            margin-left: rem(39);


            &--left {
                margin-right: rem(0);
            }

            &--right {
                margin-left: rem(0);
            }

            &--text {
                margin-top: rem(16);
            }
        }
    }


    .parcours {
        margin-top: rem(48);
        display: flex;
        align-items: center;
        justify-items: center;
        flex-direction: column;

        &__title {
            color: $black;
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            margin-bottom: rem(48);
        }

        &__flex {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

        }

        &__cn {
            color: $secondary-color;
            width: rem(256);
            text-align: center;
            text-decoration: none;
        }

        &__ceu {
            color: $primary-color;
            width: rem(256);
            text-align: center;
            text-decoration: none;
            margin-top: rem(0);
        }

        &__dw {
            color: $black;
            width: rem(256);
            text-align: center;
            text-decoration: none;
        }

        &__text {
            font-family: $font-melodrama;

        }
    }

    .debouche {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        flex-direction: column;

        &__title {
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
        }


        &__ordi {
            display: none;
        }

        &__mobile {
            display: block;
        }
    }


    .candidature {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: rem(64);
    }



}
</style>