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
        <h1 class="hero__title">MONTBELIARD</h1>
        <div ref="lineWrapper" class="anime__0">
            <svg width="496" height="209" viewBox="0 0 496 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="linePath" d="M1 2.4239C168.333 -2.41122 503 32.1348 503 209" stroke="black" stroke-width="4" />
            </svg>
        </div>


        <p class="hero__paragraph">The aim of the BUT MMI is to train you in web-related professions. In three years, you'll be able to design and produce online multimedia products and services.</p>
        <MyButton href='/en/candidater' label="CANDIDACY" color="secondary" size="big" font="satoshi" class="hero__button" />
        <div class="hero__blue-line">
        </div>
        <div class="hero__video">
            <video controls width="100%" height="auto" autoplay muted>
                <source src="../../assets/mmi.mp4" type="video/mp4">
            </video>
            <h2 class="hero__h2">Multimedia & Internet professions</h2>
            <div class="hero__blue-line"> </div>
        </div>
    </div>

    <div class="cursus">
        <p class="cursus__paragraph">This program, which is offered as an initial training course or on a <strong>sandwich course</strong> from the second year onwards, provides direct access to the <strong>world of work</strong> and allows students to pursue a variety of further studies.</p>
    </div>
    <MyCursusEN />

    <div class="parcours">
        <h2 class="parcours__title">3 Tracks</h2>
        <p class="parcours__body">Are you more of a creator ? Comm ? Dev ?</p>
        <MyParcoursEN />
    </div>

    <div class="decouvrir">
        <h2 class="decouvrir__title">DISCOVER MORE</h2>
        <div class="decouvrir__arrow">
            <MyArrow />
            <p class="decouvrir__arrow--paragraph">Discover all the facets of training.</p>
        </div>
    </div>
    <MyDecouvrirs />

    <div class="international">
        <h2 class="international__title--orange">MMI</h2>
        <h2 class="international__title">Abroad</h2>
        <MyInternational />


        <div class="international__end">
            <div class="international__end--text">
                <p>Our BUT offers students the opportunity to spend a full semester abroad at partner CÉGEPs (collège d'enseignement général et professionnel) in <strong>Canada</strong>.
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
.anime__0 {
    position: absolute;
    right: 7rem;
    top: 11rem;

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
    display: grid;
    grid-template-columns: auto;
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
    grid-template-columns: auto;
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
    grid-template-columns: auto;
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
        margin-left: rem(30);
        font-family: $font-satoshi-bold;

        &--orange {
            margin-left: rem(30);
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

    .anime__0 {
        visibility: hidden;

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
