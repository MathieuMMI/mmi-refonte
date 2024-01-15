<script setup>

</script>
<template>
    <div class="espace">
        <h2 class="espace__title">ESPACE PRO</h2>
        <p class="espace__paragraph">Découvrez les opportunités que la formation vous offre !</p>
    </div>

    <div class="projet">
        <div class="projet__left">
            <MyEllipse color="primary" size="tiny" class="projet__left--ellipse" />
            <h2 class="projet__left--title">Proposer un projet ?</h2>
            <p class="projet__left--text"> Association, vous souhaitez densifier votre communication autour d'un site ou
                d'une application mobile ? Vous pouvez nous proposer un sujet de projet collectif. </p>
            <p class="projet__left--text">Vous devenez alors commanditaire et vous participerez ainsi à mettre en
                application les compétences acquises par
                nos étudiants.</p>
            <p class="projet__left--text"> Proposez votre projet ! </p>
        </div>
        <div class="projet__right">
            <MyProjet />
            <MyButton href='' label="DEPOSER UN PROJET ?" color="borderw" font="melodrama" size="big" />
            <MyEllipse color="primary" size="tiny" class="projet__right--ellipse" />
        </div>
    </div>

    <div class="alternance">
        <div class="alternance__left">
            <MyButton href='' label="DEPOSER UNE OFFRE ?" color="borderb" font="melodrama" size="big" />
            <MyEllipse color="primary" size="big" class="alternance__left--ellipse" />
            <MyCalendrier />

        </div>
        <div class="alternance__right">
            <h2 class="alternance__right--title">Proposer une alternance ?</h2>
            <p class="alternance__right--text"> Vous pouvez également accueillir un étudiant en apprentissage à partir de la
                deuxième année. </p>
            <p class="alternance__right--text">Son rythme est pensé sur 2 semaines : 10 jours en entreprise, 3 jours au
                département. Sauf condition particulière, les congés sont de 5 semaines.</p>
            <p class="alternance__right--text"> N'hésitez plus… Contactez-nous pour adopter un apprenti !</p>
        </div>
    </div>

    <div class="stage">
        <div class="stage__left">
            <h2 class="stage__left--title">Proposer un stage ?</h2>
            <p class="stage__left--text"> Afin de valider leur semestre et obtenir leur diplôme, nos étudiants doivent
                effectuer un stage de 12 semaines en milieu professionnel (en deuxième année) ou de 16 semaines (en
                troisième année). </p>
            <p class="stage__left--text">Ils mettent en pratique l'ensemble leurs savoirs acquis durant la formation. Leur
                travail se développe dans un
                large champ d'action, de la start-up à l'entreprise plus traditionnelle en passant par les agences de
                communication digitale ou les associations régionales.</p>
            <p class="stage__left--text"> Si leurs projets ont retenu votre attention, n'hésitez pas à nous soumettre vos
                offres grâce à notre formulaire. </p>
        </div>
        <div class="stage__right">
            <MyButton href='' label="DEPOSER UN PROJET ?" color="borderb" font="melodrama" size="big" />
            <MyEllipse color="secondary" size="regular" class="stage__right--ellipse" />
            <MyOrdi />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.espace {
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
}

.projet {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-items: center;
    background-color: $black;
    color: $white;
    height: 100vh;

    position: relative;

    &__left {
        margin-left: rem(70);

        &--ellipse {
            position: absolute;
            left: rem(-10);
            top: rem(-10);
        }

        &--title {
            font-size: $h2;
            font-family: $font-satoshi-bold;
            width: rem(569);
            margin-bottom: rem(73);

        }

        &--text {
            width: rem(487);
            margin-bottom: rem(16);
        }
    }

    &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: rem(25);

        &--ellipse {
            position: absolute;
            right: rem(0);
            bottom: rem(0);
        }
    }
}

.alternance {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: center;
    color: $black;
    position: relative;
    height: 100vh;

    &__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: rem(25);

        &--ellipse {
            position: absolute;
            left: rem(-50);
            top: rem(0);
            z-index: -1;
        }
    }

    &__right {
        &--title {
            font-size: $h2;
            font-family: $font-satoshi-bold;
            width: rem(569);
            margin-bottom: rem(73);

        }

        &--text {
            width: rem(487);
            margin-bottom: rem(16);
        }
    }
}

.stage {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-items: center;
    color: $black;
    height: 100vh;

    position: relative;

    &__left {
        margin-left: rem(70);

        &--title {
            font-size: $h2;
            font-family: $font-satoshi-bold;
            width: rem(569);
            margin-bottom: rem(73);

        }

        &--text {
            width: rem(487);
            margin-bottom: rem(16);
        }
    }

    &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: rem(25);

        &--ellipse {
            position: absolute;
            top: rem(0);
            right: rem(0);
        }
    }
}

@media screen and (max-width: 767px) {
    .espace {
        margin-left: rem(0);
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        text-align: center;

        &__title {
            color: $black;
            font-size: $mobile-h1;
            font-family: $font-satoshi-bold;
        }

        &__paragraph {
            font-family: $font-satoshi-bold;
            font-size: $mobile-body;
            color: #8B8BDC;
            margin-bottom: rem(30);
            width: rem(281);
        }
    }

    .projet {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $black;
        color: $white;
        height: 100%;
        position: relative;
        overflow: hidden;

        &__left {
            margin-left: rem(0);

            &--ellipse {
                position: absolute;
                left: rem(-30);
                top: rem(-30);
            }

            &--title {
                font-size: $mobile-h2;
                font-family: $font-satoshi-bold;
                width: rem(232);
                margin-bottom: rem(73);
                margin-left: rem(30);
                margin-top: rem(30);


            }

            &--text {
                width: rem(312);
                margin-bottom: rem(16);
                width: 80%;
                margin-left: rem(30);
            }
        }

        &__right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: rem(25);

            &--ellipse {
                position: absolute;
                right: rem(0);
                bottom: rem(0);
            }
        }
    }


    .alternance {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        color: $black;
        position: relative;
        height: 100%;
        overflow: hidden;

        &__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: rem(25);

            &--ellipse {
                position: absolute;
                left: rem(-272);
                top: rem(0);
                z-index: -1;
            }
        }

        &__right {
            &--title {
                margin-top: rem(64);
                font-size: $mobile-h2;
                font-family: $font-satoshi-bold;
                width: rem(292);
                margin-bottom: rem(73);
                margin-left: rem(30);

            }

            &--text {
                width: rem(312);
                margin-bottom: rem(16);
                margin-left: rem(30);
                width: 80%;
            }
        }
    }

    .stage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $black;
        height: 100%;
        overflow: hidden;

        position: relative;

        &__left {
            margin-left: rem(0);

            &--title {
                font-size: $mobile-h2;
                font-family: $font-satoshi-bold;
                width: rem(292);
                margin-bottom: rem(73);

            }

            &--text {
                width: rem(292);
                margin-bottom: rem(16);
            }
        }

        &__right {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            gap: rem(25);

            &--ellipse {
                display: none;
                position: absolute;
                top: rem(-144);
                right: rem(-48);
            }
        }
    }



}
</style>