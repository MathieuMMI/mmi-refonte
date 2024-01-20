<script>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

export default {
    setup() {
        const lineWrapper1 = ref(null);
        const linePath1 = ref(null);
        const lineLength1 = ref(0);
        const candidatureButton = ref(null);

        const lineWrapper2 = ref(null);
        const linePath2 = ref(null);
        const lineLength2 = ref(0);
        const lineWrapper3 = ref(null);
        const linePath3 = ref(null);
        const lineLength3 = ref(0);
        const parcoursComponent = ref(null);

        const lineWrapper4 = ref(null);
        const linePath4 = ref(null);
        const lineLength4 = ref(0);
        const decouvrirComponent = ref(null);

        onMounted(async () => {
            await nextTick();

            lineWrapper1.value = document.querySelector('.anime__1');
            linePath1.value = lineWrapper1.value?.querySelector('path');
            candidatureButton.value = document.querySelector('.hero__button');
            if (!linePath1.value) {
                console.error('linePath1 not found');
                return;
            }
            lineLength1.value = linePath1.value.getTotalLength();
            linePath1.value.style.strokeDasharray = lineLength1.value;
            linePath1.value.style.strokeDashoffset = lineLength1.value;

            lineWrapper2.value = document.querySelector('.anime__2');
            linePath2.value = lineWrapper2.value?.querySelector('path');
            if (!linePath2.value) {
                console.error('linePath2 not found');
                return;
            }
            lineLength2.value = linePath2.value.getTotalLength();
            linePath2.value.style.strokeDasharray = lineLength2.value;
            linePath2.value.style.strokeDashoffset = lineLength2.value;

            lineWrapper3.value = document.querySelector('.anime__3');
            linePath3.value = lineWrapper3.value?.querySelector('path');
            if (!linePath3.value) {
                console.error('linePath3 not found');
                return;
            }
            lineLength3.value = linePath3.value.getTotalLength();
            linePath3.value.style.strokeDasharray = lineLength3.value;
            linePath3.value.style.strokeDashoffset = lineLength3.value;

            lineWrapper4.value = document.querySelector('.anime__4');
            linePath4.value = lineWrapper4.value?.querySelector('path');
            if (!linePath4.value) {
                console.error('linePath4 not found');
                return;
            }
            lineLength4.value = linePath4.value.getTotalLength();
            linePath4.value.style.strokeDasharray = lineLength4.value;
            linePath4.value.style.strokeDashoffset = lineLength4.value;
            parcoursComponent.value = document.querySelector('.parcours__parcours');
            if (!linePath3.value) {
                console.error('linePath3 not found');
                return;
            }
            decouvrirComponent.value = document.querySelector('.decouvrir__decouvrir');
            if (!linePath4.value) {
                console.error('linePath4 not found');
                return;
            }

            gsap.to(candidatureButton.value, {
                opacity: 0,
                pointerEvents: 'none',
            });

            const timeline1 = gsap.timeline({
                onComplete: () => {
                    gsap.to(candidatureButton.value, {
                        duration: 0.5,
                        opacity: 1,
                        pointerEvents: 'auto',
                        onComplete: () => {
                            animateLine2();
                        },
                    });
                },
            });

            timeline1.to(linePath1.value, {
                duration: 1,
                ease: 'power1.inOut',
                strokeDashoffset: 0,
            });

            const animateLine2 = () => {
                const timeline2 = gsap.timeline({
                    delay: 1,
                    onComplete: () => {
                        animateLine3();
                    },
                });

                timeline2.to(linePath2.value, {
                    duration: 1,
                    ease: 'power1.inOut',
                    strokeDashoffset: 0,
                });
            };

            const animateLine3 = () => {
                const timeline3 = gsap.timeline({
                    delay: 1,
                    onComplete: () => {
                        gsap.to(parcoursComponent.value, {
                            duration: 0.5,
                            opacity: 1,
                            pointerEvents: 'auto',
                            onComplete: () => {
                                animateLine4();
                            },
                        });
                    },
                });

                timeline3.to(linePath3.value, {
                    duration: 1,
                    ease: 'power1.inOut',
                    strokeDashoffset: 0,
                });
            };
            const animateLine4 = () => {
                const timeline4 = gsap.timeline({
                    delay: 2,
                    onComplete: () => {
                        gsap.to(decouvrirComponent.value, {
                            duration: 0.5,
                            opacity: 1,
                            pointerEvents: 'auto',
                            onComplete: () => {
                            },
                        });
                    },
                });

                timeline4.to(linePath4.value, {
                    duration: 1,
                    ease: 'power1.inOut',
                    strokeDashoffset: 0,
                });
            };


        });

        return {
            lineWrapper1,
            linePath1,
            lineLength1,
            lineWrapper2,
            linePath2,
            lineLength2,
            lineWrapper3,
            linePath3,
            lineLength3,
            parcoursComponent,
            lineWrapper4,
            linePath4,
            lineLength4,
            decouvrirComponent,
        };
    },
};
</script>
<template>
    <div class="hero">
        <div class='hero__buttonLang'>
            <NuxtLink @click="closeMenu" to="/en">
                <MyButton color="white" label="EN" size="small" font="satoshib" />
            </NuxtLink>
        </div>
        <h1 class="hero__title">MMI</h1>
        <h1 class="hero__title">MONTBÉLIARD</h1>
        <div ref="lineWrapper1" class="anime__1">
            <svg width="496" height="209" viewBox="0 0 496 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath1" d="M1 2.4239C168.333 -2.41122 503 32.1348 503 209" stroke="black" stroke-width="4" />
            </svg>
        </div>


        <p class="hero__paragraph">Vous former aux métiers du web : tel est l'objectif du BUT MMI. En trois ans, vous serez
            capable de concevoir et de réaliser des produits et services multimédia en ligne.
        </p>
        <MyButton ref="candidatureButton" href='/candidater' label="CANDIDATURE" color="secondary" size="big" font="satoshi"
            class="hero__button" />

        <div class="hero__video">
            <video width="100%" height="auto" autoplay muted>
                <source src="https://bouque.fr/medias/mmi.mp4" type="video/mp4">
            </video>
            <h2 class="hero__h2">Métiers du Multimédia & de l'Internet</h2>
            <div class="hero__blue-line"> </div>
        </div>
    </div>

    <div class="cursus">
        <div ref="lineWrapper2" class="anime__2">
            <svg width="438" height="100" viewBox="0 0 438 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath2" d="M2 1C3.81667 33.3333 93.56 98 438 98" stroke="black" stroke-width="3" />
            </svg>
        </div>

        <p class="cursus__paragraph">Ce cursus dispensé en formation initiale ou en <strong> alternance</strong> à
            partir de
            la deuxième année
            permet un accès direct à la vie <strong> professionnelle </strong>et autorise diverses poursuites d'études.
        </p>
    </div>
    <MyCursus />

    <div class="parcours">
        <div ref="lineWrapper3" class="anime__3">
            <svg width="397" height="288" viewBox="0 0 397 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath3" d="M2 1C20.6085 96 152.682 286 397 286" stroke="black" stroke-width="3" />
            </svg>
        </div>

        <h2 class="parcours__title">3 PARCOURS</h2>
        <p class="parcours__body">Tu es plutôt créa ? Comm ? Dev ?</p>
        <MyParcours ref="parcoursComponent" class="parcours__parcours" />
    </div>

    <div class="decouvrir">
        <div ref="lineWrapper4" class="anime__4">
            <svg width="357" height="331" viewBox="0 0 357 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath4" d="M354.935 1C357.408 110.333 289.882 329 0 329" stroke="black" stroke-width="3" />
            </svg>
        </div>

        <h2 class="decouvrir__title">EN DÉCOUVRIR DAVANTAGE</h2>
        <div class="decouvrir__arrow">
            <MyArrow />
            <p class="decouvrir__arrow--paragraph">Découvrez toutes les facettes de la formation.</p>
        </div>
    </div>
    <MyDecouvrirs ref="decouvrirComponent" class="decouvrir__decouvrir" />

    <div class="international">
        <h2 class="international__title--orange"> MMI À</h2>
        <h2 class="international__title">L'INTERNATIONAL</h2>
        <MyInternational class="international__map" />


        <div class="international__end">
            <div class="international__end--text">
                <p>Notre BUT offre aux étudiants la possibilité de suivre un semestre complet à l'étranger dans des
                    CÉGEP
                    (collège
                    d'enseignement général et professionnel) partenaires au <strong>Canada</strong>.
                </p>
                <p> Les stages et les alternances sont également l'occasion de tenter la mobilité internationale.</p>
            </div>

            <MyButton href='/candidater' label="DÉCOUVRIR" color="border" font="melodrama" size="big"
                class="international__end--button" />
            <MyEllipse size="regular" color="primary2" class="international__end--ellipse1" />
            <MyEllipse size="small" color="primary" class="international__end--ellipse2" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.anime {
    &__1 {
        position: absolute;
        right: 7rem;
        top: 11rem;
        z-index: -1;
    }

    &__2 {
        position: absolute;
        left: 0rem;
        top: 0rem;
    }

    &__3 {
        position: absolute;
        left: 8rem;
        top: -9.5rem;
    }

    &__4 {
        position: absolute;
        right: 8rem;
        top: -2.5rem;
    }

    svg {
        max-width: 100%; // Ensure the SVG scales with its container
        height: auto;
    }
}




.hero {
    display: flex;
    flex-direction: column; // Pour aligner les éléments verticalement
    align-items: flex-start; // Alignement à gauche
    justify-content: space-between; // Pour espacer les éléments verticalement et aligner le bouton en bas
    position: relative;

    &__buttonLang{
        margin-left: auto;
        margin-right: rem(20);
        text-decoration: none;
        border: rem(1) solid $secondary-color;
        border-radius: rem(32);
        padding: rem(3);
    }

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
        opacity: 0; // Set initial opacity to 0
        pointer-events: none; // Initially disable pointer events
        margin-right: 3rem;
    }

    &__blue-line {
        background-color: $secondary-color;
        height: 2px;
        width: 100%;
    }

    &__h2 {
        font-size: $h2;
        font-weight: bold;
        color: $white;
        margin-left: rem(0);
        font-family: $font-satoshi-bold;
        position: absolute;
        left: 1rem;
        bottom: 1rem;
    }

    &__video {
        max-width: 100%;
        height: auto;
    }
}

.cursus {
    position: relative;
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    text-align: center;

    &__paragraph {
        font-size: $body;
        line-height: 1.5;
        max-width: rem(700);
        margin-top: rem(80);

        strong {
            font-weight: bold;
            font-family: $font-satoshi-bold;
        }
    }
}

.parcours {
    position: relative;
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    text-align: center;
    margin-left: rem(20);

    &__title {
        font-size: $h2;
        font-weight: bold;
        font-family: $font-satoshi-bold;
        margin-top: rem(106);
    }

    &__body {
        color: $secondary-color;
        font-size: $body;
        font-weight: bold;
        margin-bottom: rem(20);
        font-family: $font-satoshi-bold;

    }

    &__parcours {
        opacity: 0; // Set initial opacity to 0
        pointer-events: none; // Initially disable pointer events
    }
}

.decouvrir {
    position: relative;
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    text-align: center;
    margin-top: rem(40);
    font-family: $font-satoshi-bold;


    &__title {
        font-size: $h2;
        font-weight: bold;
        max-width: rem(700);
        margin-top: rem(233);

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

    &__decouvrir {
        opacity: 0; // Set initial opacity to 0
        pointer-events: none; // Initially disable pointer events
    }
}

.international {

    &__title {
        font-size: $h2;
        font-weight: bold;
        text-align: left;
        color: $black;
        margin-bottom: rem(20);
        margin-left: rem(141);
        font-family: $font-satoshi-bold;

        &--orange {
            margin-top: rem(269);
            margin-left: rem(141);
            color: $primary-color;
            font-size: $h2;
            font-weight: bold;
            text-align: left;
            font-family: $font-melodrama;

        }
    }

    &__map {
        margin-top: rem(111);
        margin-bottom: rem(24);
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
        margin-bottom: rem(64);

        &--text {
            margin-bottom: rem(20);
            margin-left: rem(70);

            strong {
                font-weight: bold;
                font-family: $font-satoshi-bold;

            }
        }

        &--ellipse1 {
            position: absolute;
            right: rem(-0);
            top: 0rem;
        }

        &--ellipse2 {
            position: absolute;
            left: rem(-40);
            top: rem(-16);
        }
    }
}

@media screen and (max-width: 767px) {

    .anime {
        display: none;

        &__1 {
            position: absolute;
            right: 7rem;
            top: 11rem;
            display: none;
        }

        &__2 {
            position: absolute;
            left: 0rem;
            top: 0rem;
            display: none;
        }

        &__3 {
            position: absolute;
            left: 8rem;
            top: -9.5rem;
            display: none;
        }

        &__4 {
            position: absolute;
            right: 8rem;
            top: -2.5rem;
            display: none;
        }


        svg {
            max-width: 100%; // Ensure the SVG scales with its container
            height: auto;
            display: none;
        }
    }

    .hero {
        display: flex;
        flex-direction: column; // Pour aligner les éléments verticalement
        align-items: flex-start; // Alignement à gauche
        justify-content: space-between; // Pour espacer les éléments verticalement et aligner le bouton en bas
        position: relative;

        &__title {
            font-size: $mobile-h1;
            font-weight: bold;
            color: $secondary-color;
            margin-left: rem(32);
            font-family: $font-satoshi-bold;
        }

        &__paragraph {
            font-size: $mobile-body;
            line-height: 1.5;
            max-width: rem(580);
            margin-top: 20px;
            margin-left: rem(32);
            margin-bottom: rem(30);

        }

        &__button {
            align-self: center;
            margin-bottom: rem(32);
        }

        &__blue-line {
            background-color: $secondary-color;
            height: 2px;
            width: 100%;
        }

        &__h2 {
            font-size: $mobile-h2;
            font-weight: bold;
            color: $white;
            margin-left: rem(0);
            font-family: $font-satoshi-bold;
            position: absolute;
            left: 1rem;
            bottom: 1rem;
        }

        &__video {
            max-width: 100%;
            height: auto;
        }
    }

    .cursus {
        display: grid;
        grid-template-columns: auto;
        justify-items: center;
        text-align: center;

        &__paragraph {
            font-size: $mobile-body;
            line-height: 1.5;
            max-width: rem(317);
            margin-top: 20px;

            strong {
                font-weight: bold;
                font-family: $font-satoshi-bold;
            }
        }
    }

    .parcours {
        display: grid;
        grid-template-columns: auto;
        justify-items: center;
        text-align: center;
        margin-left: rem(0);

        &__title {
            font-size: $mobile-h2;
            font-weight: bold;
            font-family: $font-satoshi-bold;

        }

        &__body {
            color: $secondary-color;
            font-size: $mobile-body;
            font-weight: bold;
            margin-bottom: rem(20);
            font-family: $font-satoshi-bold;

        }
    }

    .decouvrir {
        display: grid;
        grid-template-columns: auto;
        justify-items: center;
        text-align: center;
        //margin-top: rem(40);
        font-family: $font-satoshi-bold;


        &__title {
            font-size: $mobile-h1;
            font-weight: bold;
            max-width: rem(300);
            margin-top: rem(100);
        }

        &__arrow {
            display: flex;
            align-items: center;
            margin-left: rem(0);
            max-width: rem(300);

            &--paragraph {
                font-weight: bold;
            }
        }
    }

    .international {

        &__title {
            font-size: $mobile-h1;
            font-weight: bold;
            text-align: left;
            color: $black;
            margin-top: rem(0); 
            margin-left: rem(30);
            margin-bottom: rem(80);
            font-family: $font-satoshi-bold;

            &--orange {
                margin-left: rem(30);
                margin-top: rem(0); 
                color: $primary-color;
                font-size: $mobile-h2;
                font-weight: bold;
                text-align: left;
                font-family: $font-melodrama;

            }
        }

        &__end {
            margin-top: rem(40);
            color: $black;
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

            &--text {
                margin-left: rem(0);
                margin-bottom: rem(20);
                max-width: rem(273);

                strong {
                    font-weight: bold;
                    font-family: $font-satoshi-bold;

                }
            }

            &--button {
                margin-bottom: rem(30);
            }

            &--ellipse1 {
                visibility: hidden;
            }

            &--ellipse2 {
                visibility: hidden;
            }
        }
    }

}
</style>

