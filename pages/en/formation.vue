<template>
    <div class="hero">
        <h2 class="hero__title">The FORMATION</h2>
        <p class="hero__paragraph">Do you have a passion for the web ?</p>
        <div class="hero__grid">
            <div class="hero__left">
                <img class="hero__left--img" src="../../assets/foramtion1.jpg" alt="image formation">
                <img class="hero__left--img" src="../../assets/formation2.jpg" alt="image formation">
            </div>
            <div class="hero__right">
                <img class="hero__right--img" src="../../assets/formation3.jpg" alt="image formation">
                <img class="hero__right--img" src="../../assets/formation4.jpg" alt="image formation">
            </div>
            <div>
                <h2 class="hero__content--title">Educational program</h2>
                <p class="hero__content--paragraph">BUT MMI is a multi-disciplinary training program built around three
                    fundamental axes: design, development and communication. Inspired by professional practices, we train
                    students to be multi-skilled in all web-related trades.
                </p>
            </div>
        </div>
    </div>
    <div class="bases">
        <MyEllipse color="primary" size="regular" class="bases__ellipse" />
        <div class="bases__body">
            <div class="bases__left">
                <h2 class="bases__left--title">Acquire the basics</h2>
                <p class="bases__left--paragraph">
                    Oral communication is an important part of our training. Various presentation exercises will help you
                    perfect your <strong>communication skills</strong>.
                    You'll learn how to manage stress, correct gestural and verbal tics and improve your presence.
                </p>
                <p class="bases__left--paragraph">
                    '<strong>Artistic expression</strong> and aesthetics classes will give you the basics for creating
                    functional designs. This includes learning about the history of graphic design, its practices and the
                    use of software tools such as those offered by the Adobe suite.
                </p>
            </div>
            <div class="bases__right">
                <p class="bases__right--paragraph">
                    Lessons dedicated to <strong>web development </strong>will cover languages such as HTML, CSS3 and PHP.
                    Other important application development languages (JAVA) will also be covered.
                </p>

                <p class="bases__right--paragraph">
                    The Personal and Professional Project is an opportunity to discover <strong>the professional
                        world</strong>of multimedia.
                    In dialogue with <strong>professionals</strong> in the field, students can then determine their choice
                    of career path according to their skills and aspirations.
                    During this semester, you'll carry out your first individual project.
                </p>

                <p class="bases__right--paragraph">
                    The <strong>design</strong> and development of a mobile website will require you to put into practice
                    all the lessons you've learned during the months of September to December.

                </p>
                <MyEllipse color="primary" size="regular" class="bases__right--ellipse" />
            </div>
        </div>
    </div>
    <div class="fondamentaux">
        <h2 class="fondamentaux__title">Get a grip the fundamentals</h2>
        <div class="fondamentaux__paragraph">
            <div class="fondamentaux__paragraph--left">
                <p class="fondamentaux__paragraph--text">
                    Project work is at the heart of MMI training. All the skills acquired during Semester 2 are put to the
                    test through practical projects. Students' creativity is put to the test in project management courses,
                    and their ability to work as part of a team is assessed in a group project.
                </p>
                <p class="fondamentaux__paragraph--text">
                    During this semester, experienced web integration professionals will guide you in the development of
                    functional dynamic interfaces.
                </p>
            </div>
            <div class="fondamentaux__paragraph--right">
                <p class="fondamentaux__paragraph--text">
                    You'll also strengthen your technical skills through the creation of a mobile application or a data
                    visualization site, essential areas that are a real challenge for tomorrow's web.
                </p>
                <p class="fondamentaux__paragraph--text">
                    You'll discover new software such as Adobe Illustrator to create illustrations and communication media.
                    Video projects, meanwhile, will enable you to master audio/video editing software such as Adobe Premiere
                    or Adobe Audition.
                </p>
            </div>
        </div>
    </div>

    <div class="parcours">
        <h2 class="parcours__title">3 path</h2>
        <div class="parcours__flex">
            <a href="parcours-crea" class="parcours__cn">
                <MyEllipse color="secondary" size="regular" />
                <p class="parcours__text">DIGITAL CREATION PATH</p>
            </a>
            <a href="parcours-com" class="parcours__ceu">
                <MyEllipse color="primary" size="regular" />
                <p class="parcours__text">COMMUNICATION AND USER EXPERIENCE PATH</p>
            </a>
            <a href="parcours-dev" class="parcours__dw">
                <MyEllipse color="black" size="regular" />
                <p class="parcours__text">WEB DEVELOPMENT PATH</p>
            </a>
        </div>
    </div>

    <div class="debouche">
        <h2 class="debouche__title">Opportunities</h2>
        <MyDebouche class="debouche__ordi" />
        <MyDeboucheMobile class="debouche__mobile" />
    </div>
    <div class="candidature">
        <MyButton href='/en/candidater' label="CANDIDACY" color="black" font="satoshi" />
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
        margin-top: rem(70);
    }


    &__content {
        &--divMarg {
            margin-top: rem(-200);
        }
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
    height: auto;
    color: $white;
    position: relative;

    &__ellipse {
        position: absolute;
        left: 0;
        top: -4rem;
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
    height: auto;
    margin-top: rem(150);


    &__title {
        font-size: $h2;
        font-family: $font-satoshi-bold;
    }

    &__ordi {
        display: block;
        width: 100%;
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
    margin-top: rem(64);
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
        height: 100%;
        color: $white;
        position: relative;
        overflow: hidden;
        padding-bottom: 8rem;
        display: flex;
        justify-content: center;

        &__ellipse {
            position: absolute;
            left: -6.8rem;
            top: -6.6rem;
        }

        &__body {

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            margin: 2rem;
            max-width: rem(342);

        }

        &__left {
            margin-top: rem(0);
            margin-bottom: rem(0);

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
                right: -5rem;
                bottom: -13rem;
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
        height: 60%;
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
            width: 100%;
        }
    }


    .candidature {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: rem(64);
    }
}

@media screen and (max-width: 900px) {
    .hero {
        &__content {
        &--divMarg {
            margin-top: 0;
        }
    }}
}
</style>