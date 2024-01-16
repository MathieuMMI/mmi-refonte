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
                    delay: 2,
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
                    delay: 2,
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
        <h1 class="hero__title">MMI</h1>
        <h1 class="hero__title">MONTBELIARD</h1>
        <div ref="lineWrapper1" class="anime__1">
            <svg width="496" height="209" viewBox="0 0 496 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath1" d="M1 2.4239C168.333 -2.41122 503 32.1348 503 209" stroke="black" stroke-width="4" />
            </svg>
        </div>


        <p class="hero__paragraph">The aim of the BUT MMI is to train you in web-related professions. In three years, you'll
            be able to design and produce online multimedia products and services.</p>
        <MyButton ref="candidatureButton" href='/en/candidater' label="CANDIDACY" color="secondary" size="big"
            font="satoshi" class="hero__button" />
        <div class="hero__video">
            <video width="100%" height="auto" autoplay muted>
                <source src="../../assets/mmi.mp4" type="video/mp4">
            </video>
            <h2 class="hero__h2">Multimedia & Internet professions</h2>
            <div class="hero__blue-line"> </div>
        </div>
    </div>

    <div class="cursus">
        <div ref="lineWrapper2" class="anime__2">
            <svg width="399" height="96" viewBox="0 0 399 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath2" d="M2 1C3.65417 32 85.37 94 399 94" stroke="black" stroke-width="3" />
            </svg>
        </div>
        <p class="cursus__paragraph">This program, which is offered as an initial training course or on a <strong>sandwich
                course</strong> from the second year onwards, provides direct access to the <strong>world of work</strong>
            and allows students to pursue a variety of further studies.</p>
    </div>
    <MyCursusEN />

    <div class="parcours">
        <div ref="lineWrapper3" class="anime__3">
            <svg width="461" height="288" viewBox="0 0 461 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath3" d="M2 1C23.6235 96 177.096 286 461 286" stroke="black" stroke-width="3" />
            </svg>

        </div>
        <h2 class="parcours__title">3 Tracks</h2>
        <p class="parcours__body">Are you more of a creator ? Comm ? Dev ?</p>
        <MyParcoursEN ref="parcoursComponent" class="parcours__parcours" />
    </div>

    <div class="decouvrir">
        <div ref="lineWrapper4" class="anime__4">
            <svg width="324" height="331" viewBox="0 0 324 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath4" d="M321.941 1C324.184 110.333 262.935 329 0 329" stroke="black" stroke-width="3" />
            </svg>

        </div>

        <h2 class="decouvrir__title">DISCOVER MORE</h2>
        <div class="decouvrir__arrow">
            <MyArrow />
            <p class="decouvrir__arrow--paragraph">Discover all the facets of training.</p>
        </div>
    </div>
    <MyDecouvrirsEN ref="decouvrirComponent" class="decouvrir__decouvrir" />

    <div class="international">
        <h2 class="international__title--orange">MMI</h2>
        <h2 class="international__title">Abroad</h2>
        <MyInternationalEN class="international__map" />


        <div class="international__end">
            <div class="international__end--text">
                <p>Our BUT offers students the opportunity to spend a full semester abroad at partner CÉGEPs (collège
                    d'enseignement général et professionnel) in <strong>Canada</strong>.
                </p>
                <p>Internships and work-study programs are also an opportunity to try your hand at international.</p>
            </div>

            <MyButton href='/candidater' label="DISCOVER" color="border" font="melodrama" size="big"
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
        opacity: 0;
        pointer-events: none; 
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
        margin-top: rem(40);
        font-family: $font-satoshi-bold;


        &__title {
            font-size: $mobile-h1;
            font-weight: bold;
            max-width: rem(300);

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
            margin-left: rem(30);
            margin-bottom: rem(80);
            font-family: $font-satoshi-bold;

            &--orange {
                margin-left: rem(30);

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
