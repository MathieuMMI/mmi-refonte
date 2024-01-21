<script setup>

</script>
<template>
    <div class="hero">
        <h2 class="hero__title">EXTRAS</h2>
        <p class="hero__paragraph">Your reasons for choosing MMI Montbéliard !</p>
        <div class="hero__img">
            <div class="hero__img--left">
                <img src="../../assets/extra1.jpg" alt="image offf">
                <img src="../../assets/extra2.jpg" alt="image offf">
            </div>
            <div class="hero__img--right">
                <img src="../../assets/extra3.jpg" alt="image canada">
                <img src="../../assets/extra4.jpg" alt="image oeil">
            </div>
        </div>
    </div>

    <div class="canada">
        <h2 class="canada__title">Semester in Canada</h2>
        <div class="canada__grid">
            <div class="canada__left">
                <img src="../../assets/canada1.png" alt="" class="canada__left--img">
                <p class="canada__left--text">
                    Our department partners with two Canadian CEGEPs. Every year, around ten MMI students spend their third
                    or fourth semester in one of these programs.
                </p>
            </div>
            <div class="canada__right">
                <p class="canada__right--text">
                    In Montreal, CEGEP Vanier welcomes our students for a semester of training in printing. At CEGEP de
                    Matane, our students can take part in the "multimedia integration techniques" program.
                </p>
                <img src="../../assets/canada2.png" alt="" class="canada__right--img">
            </div>
        </div>
    </div>

    <div class="offf">
        <h2 class="offf__title">OFFF Festival</h2>
        <div class="offf__blue-line"></div>
        <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe src="https://player.vimeo.com/video/813872845?h=fc94f42261&title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen autoplay muted>
            </iframe>
        </div>
        <div class="offf__blue-line"></div>
        <p class="offf__paragraph">
            Our department is organizing a trip to Barcelona for the OFFF international digital art festival.
            Our students enrich their artistic culture by discovering the work of major players on the international digital
            scene, as well as the cultural richness of the city.
        </p>
    </div>

    <div class="defi">
        <div class="defi__text">
            <h2 class="defi__text--title">The 24h challenge</h2>
            <p class="defi__text--paragraph">
                The principle is simple: create a multimedia work on a given subject within a 24-hour time limit. To spice
                things up, the event is punctuated by a number of "surprise" challenges! The department's premises are at
                your disposal for the duration of this real challenge.
                The 24h challenge is all about laughter, emotion and stunts !</p>
        </div>
        <img src="../../assets/defi.jpg" alt="" class="defi__img">
    </div>

    <div class="stage">
        <h2 class="stage__title">Internships and work-study</h2>
        <p class="stage__paragraph">For several years now, we have been maintaining relationships with <strong>external
                partners</strong>.
            For example, we offer our students the opportunity to do their internships and work-study programs
            <strong>abroad</strong>.
            This unique and enriching experience enables them to improve their <strong>language</strong> skills while
            deepening their technical <strong>knowledge</strong>.
        </p>
    </div>


    <div class="projet">
        <div class="projet__left">
            <MyEllipse color="primary" size="small" class="projet__left--ellipse" />
            <h2 class="projet__left--title">Projects and</h2>
            <h2 class="projet__left--title">presentation of</h2>
            <h2 class="projet__left--title">student's projects</h2>
            <div class="projet__left--div"></div>
            <p class="projet__left--paragraph">Applying the knowledge acquired in class, the projects are an opportunity for
                students to prove their know-how. All stages, from reflection to deployment, are validation stages to lead
                students towards the success of their projects.</p>
            <p class="projet__left--paragraph">Here are some projects from former BUT MMI students.</p>

        </div>
        <div class="projet__right">
            <ProjetsEN />
            <MyEllipse color="primary" size="regular" class="projet__right--ellipse" />
        </div>
    </div>

    <div class="international">
        <h2 class="international__title">Do you want to work internationally one day ?</h2>
        <div class="international__arrow">
            <MyArrow />
            <p class="international__arrow--paragraph">Discover our former students.</p>
        </div>
        <div class="international__student">
            <StudentMapEN />
        </div>


    </div>
</template>

<style lang="scss" scoped>
.hero {
    margin-left: rem(70);

    &__title {
        color: $black;
        font-size: $h2;
        font-family: $font-satoshi-bold;
        margin-top: rem(120);

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
        grid-template-columns: auto auto;
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

            margin-left: rem(32);
            margin-right: rem(32);

        }
    }

    &__right {
        &--text {
            font-family: $font-satoshi;
            width: rem(524);
            margin-bottom: rem(0);

            margin-left: rem(32);
            margin-right: rem(32);


        }

        &--img {
            margin-left: rem(-80);
            margin-top: rem(80);
        }
    }
}

.offf {

    &__title {
        margin-top: rem(182);
        margin-bottom: rem(26);
        margin-left: rem(70);
        font-size: $h2;
        font-family: $font-satoshi-bold;
    }

    &__blue-line {
        background-color: $secondary-color;
        height: 2px;
        width: 100%;
    }


    &__paragraph {

        margin-left: rem(32);
        margin-right: rem(32);
        max-width: rem(678);
        margin-top: rem(40);
    }
}


.defi {
    margin-top: rem(80);
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;


    &__text {
        &--title {
            font-size: $h2;
            font-family: $font-satoshi-bold;
            margin-bottom: rem(64);

            margin-left: rem(32);
            margin-right: rem(32);

        }

        &--paragraph {
            max-width: rem(526);

            margin-left: rem(32);
            margin-right: rem(32);

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
        margin-left: rem(32);
        margin-right: rem(32);

    }

    &__paragraph {
        max-width: rem(891);
        margin-left: rem(32);
        margin-right: rem(32);


        strong {
            font-family: $font-satoshi-bold;
        }
    }
}



.projet {
    display: grid;
    grid-template-columns: auto auto;
    background-color: $black;
    color: $white;
    height: 100%;
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

            margin-left: rem(32);
            margin-right: rem(32);


        }

        &--paragraph {
            font-size: $body;
            padding-right: rem(50);
            margin-top: rem(50);

            margin-left: rem(32);
            margin-right: rem(32);

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
    margin-top: rem(66);
    margin-bottom: rem(66);

    &__title {
        font-size: $h2;
        font-family: $font-satoshi-bold;
        width: rem(987);
        margin-left: rem(70);


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

    &__student {
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        margin-top: rem(200);
        margin-bottom: rem(200);
    }
}

@media screen and (max-width: 1500px) {
    .canada {
        margin-left: rem(0);

        &__title {
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            text-align: center;
        }

        &__grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            margin-top: rem(40);
        }

        &__left {
            position: relative;

            &--img {
                margin-left: rem(0);
                width: rem(314);
            }

            &--text {
                margin-top: rem(0);
                font-family: $font-satoshi;
                width: rem(314);
                margin-bottom: rem(60);

            }
        }

        &__right {
            &--text {
                font-family: $font-satoshi;
                width: rem(314);
                margin-bottom: rem(0);

            }

            &--img {
                margin-left: rem(0);
                width: rem(314);
            }
        }
    }

}

@media screen and (max-width: 950px) {
    .international {
        &__title {
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            width: rem(306);
            text-align: center;
            margin-left: rem(0);
        }
    }
}

@media screen and (max-width: 850px) {
    .projet {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        background-color: $black;
        color: $white;
        height: 100%;
        padding: rem(0);

        &__left {
            position: relative;
            margin-left: rem(0);
            margin-right: rem(0);
            margin-top: rem(32);
            width: rem(312);


            &--ellipse {
                position: absolute;
                top: rem(-76);
                left: rem(-92);
            }

            &--title {
                font-size: $mobile-h2;
                font-weight: bold;
                font-family: $font-satoshi-bold;

            }

            &--paragraph {
                font-size: $mobile-body;
                padding-right: rem(0);
                margin-top: rem(45);
            }

            &--div {
                height: 0vh;
            }

        }

        &__right {
            position: relative;
            margin-bottom: rem(16);

            &--ellipse {
                position: absolute;
                bottom: rem(-0);
                right: rem(-0);
                display: none;
            }

        }
    }
}

@media screen and (max-width: 767px) {
    .hero {
        margin-left: rem(0);
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
        }

        &__img {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            margin-bottom: rem(80);
        }
    }


    .canada {
        margin-left: rem(0);

        &__title {
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            text-align: center;
        }

        &__grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            margin-top: rem(40);
        }

        &__left {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

            &--img {
                margin-left: rem(0);
                width: 80%;
            }

            &--text {
                margin-top: rem(60);
                font-family: $font-satoshi;
                width: 80%;
                margin-bottom: rem(60);

            }
        }

        &__right {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

            &--text {
                font-family: $font-satoshi;
                width: 80%;
                margin-bottom: rem(0);

            }

            &--img {
                margin-left: rem(0);
                width: 80%;
            }
        }
    }

    .offf {


        &__title {
            text-align: center;
            margin-top: rem(81);
            margin-bottom: rem(20);
            margin-left: rem(0);
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
        }

        &__blue-line {
            background-color: $secondary-color;
            height: 2px;
            width: 100%;
        }


        &__paragraph {
            margin-left: rem(30);
            max-width: rem(300);
            margin-top: rem(40);
        }
    }


    .defi {
        margin-top: rem(80);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        gap: rem(20);
        margin-left: rem(0);

        &__text {
            &--title {
                font-size: $mobile-h2;
                font-family: $font-satoshi-bold;
                margin-bottom: rem(20);
                align-items: center;
            }

            &--paragraph {
                max-width: rem(311);
            }
        }

        &__img {
            border: rem(2) solid $secondary-color;
            border-radius: rem(20);
            width: rem(312);
        }
    }


    .stage {
        margin-top: rem(60);
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        margin-bottom: rem(60);

        &__title {
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            margin-bottom: rem(64);
        }

        &__paragraph {
            max-width: rem(311);

            strong {
                font-family: $font-satoshi-bold;
            }
        }
    }
}

@media screen and (max-width: 330px) {
    .hero {
        margin-left: rem(0);
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
        }

        &__img {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            margin-bottom: rem(80);
        }
    }


    .canada {

        &__title {
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            text-align: center;
        }

        &__grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            margin-top: rem(40);
        }

        &__left {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

            &--img {
                margin-left: rem(0);
                width: 80%;
            }

            &--text {
                margin-top: rem(60);
                font-family: $font-satoshi;
                width: 80%;
                margin-bottom: rem(60);

            }
        }

        &__right {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

            &--text {
                font-family: $font-satoshi;
                width: 80%;
                margin-bottom: rem(0);

            }

            &--img {
                margin-left: rem(0);
                width: 80%;
            }
        }
    }

    .offf {

        &__title {
            text-align: center;
            margin-top: rem(81);
            margin-bottom: rem(20);
            margin-left: rem(0);
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
        }

        &__blue-line {
            background-color: $secondary-color;
            height: 2px;
            width: 100%;
        }


        &__paragraph {
            margin-left: rem(30);
            max-width: rem(300);
            margin-top: rem(40);
        }
    }


    .defi {
        margin-top: rem(80);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        gap: rem(20);
        margin-left: rem(0);

        &__text {
            &--title {
                font-size: $mobile-h2;
                font-family: $font-satoshi-bold;
                margin-bottom: rem(20);
                align-items: center;
            }

            &--paragraph {
                max-width: rem(311);
            }
        }

        &__img {
            border: rem(2) solid $secondary-color;
            border-radius: rem(20);
            width: rem(312);
        }
    }


    .stage {
        display: none;
        margin-top: rem(60);
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        margin-bottom: rem(60);

        &__title {
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            margin-bottom: rem(64);
        }

        &__paragraph {
            max-width: rem(311);

            strong {
                font-family: $font-satoshi-bold;
            }
        }
    }
}

.international {

    &__title {
        font-size: $mobile-h2;
        font-family: $font-satoshi-bold;
        width: rem(306);
        text-align: center;
        margin-left: rem(0);
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

    &__student {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        margin-top: rem(200);
        margin-bottom: rem(200);
    }
}
</style>