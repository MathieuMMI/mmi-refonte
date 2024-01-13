<script>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

export default {
    setup() {
        const lineWrapper1 = ref(null);
        const linePath1 = ref(null);
        const lineLength1 = ref(0);

        const animateBlueLine = (blueLineRef) => {
            const blueLine = blueLineRef.value;

            // Adjust the properties based on your animation requirements
            gsap.to(blueLine, {
                duration: 1,
                ease: 'power1.inOut',
                width: '100%', // Adjust based on your needs
                onComplete: () => {
                    // You can add more animations or logic here if needed
                },
            });
        };


        onMounted(async () => {
            await nextTick();

            lineWrapper1.value = document.querySelector('.anime__0');
            linePath1.value = lineWrapper1.value?.querySelector('path');
            if (!linePath1.value) {
                console.error('linePath1 not found');
                return;
            }
            lineLength1.value = linePath1.value.getTotalLength();
            linePath1.value.style.strokeDasharray = lineLength1.value;
            linePath1.value.style.strokeDashoffset = lineLength1.value;


            // Create timeline for the first animation
            const timeline1 = gsap.timeline({
                onComplete: () => {
                    // Start the second animation when the first animation is complete
                    animateLine2();
                },
            });

            timeline1.to(linePath1.value, {
                duration: 1,
                ease: 'power1.inOut',
                strokeDashoffset: 0,
            });
        });





        return {
            lineWrapper1,
            linePath1,
            lineLength1,
        };
    },
};
</script>
<template>
    <div class="hero">
        <h1 class="hero__title">MMI</h1>
        <h1 class="hero__title">MONTBÉLIARD</h1>
        <div ref="lineWrapper" class="anime__0">
            <svg width="496" height="209" viewBox="0 0 496 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath" d="M1 2.4239C168.333 -2.41122 503 32.1348 503 209" stroke="black" stroke-width="4" />
            </svg>
        </div>


        <p class="hero__paragraph">Vous former aux métiers du web : tel est l'objectif du BUT MMI. En trois ans, vous serez
            capable de concevoir et de réaliser des produits et services multimédia en ligne.
        </p>
        <MyButton href='/candidater' label="CANDIDATURE" color="secondary" size="big" font="satoshi" class="hero__button" />
        <div class="hero__blue-line">
            <!-- animation2 -->
        </div>
        <img src="" alt="" class="hero__img">
        <h2 class="hero__h2">Métiers du Multimédia & de l'Internet</h2>
        <div class="hero__blue-line"> </div>
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

            <MyButton href='/candidater' label="DÉCOUVRIR" color="border" font="melodrama" size="big" />
            <MyEllipse size="regular" color="primary2" class="international__end--ellipse1" />
            <MyEllipse size="small" color="primary" class="international__end--ellipse2" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.anime {
    &__0 {
        position: absolute;
        right: 7rem;
        top: 11rem;
    }
}


.hero {
    display: flex;
    flex-direction: column; // Pour aligner les éléments verticalement
    align-items: flex-start; // Alignement à gauche
    justify-content: space-between; // Pour espacer les éléments verticalement et aligner le bouton en bas
    margin-right: rem(77);
    position: relative;

    &__title {
        font-size: $h1;
        font-weight: bold;
        color: $secondary-color;
        margin-left: rem(77);
        font-family: $font-satoshi-bold;
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
        margin-bottom: rem(32);
    }

    &__blue-line {
        background-color: $secondary-color;
        height: 2px;
        width: 200%;
    }

    &__h2 {
        font-size: $h2;
        font-weight: bold;
        color: $black;
        margin-left: rem(0);
        font-family: $font-satoshi-bold;
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
            font-family: $font-satoshi-bold;
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
        font-family: $font-satoshi-bold;

    }

    &__body {
        color: $secondary-color;
        font-size: $body;
        font-weight: bold;
        margin-bottom: rem(20);
        font-family: $font-satoshi-bold;

    }
}

.decouvrir {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    margin-top: rem(40);
    font-family: $font-satoshi-bold;


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
        font-family: $font-satoshi-bold;

        &--orange {
            color: $primary-color;
            font-size: $h2;
            font-weight: bold;
            text-align: left;
            font-family: $font-melodrama;

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
                font-family: $font-satoshi-bold;

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
