<script setup>

</script>
<template>
    <div class="top">
        <h2 class="top__title">DIGITAL CREATION</h2>
        <h2 class="top__subtitle">Welcome in crea !</h2>
    </div>
    <div class="content">
        <h2 class="content__title">What's waiting for you …</h2>
        <h3 class="content__subtitle">In first degree</h3>
        <h3 class="content__subtitle--margin">5 competences</h3>

        <div class="competences">
            <div class="competences__competence">
                <p class="competences__competence--title">Understand</p>
                <p class="competences__competence--text">Communication elements and user expectations</p>
            </div>
            <div class="competences__competence">
                <p class="competences__competence--title">Conceive</p>
                <p class="competences__competence--text">A strategic response</p>
            </div>
            <div class="competences__competence">
                <p class="competences__competence--title">Exprimer</p>
                <p class="competences__competence--text">A message through simple productions</p>
            </div>
            <div class="competences__competence">
                <p class="competences__competence--title">Develop</p>
                <p class="competences__competence--text">Create a simple website and put it online</p>
            </div>
            <div class="competences__competence">
                <p class="competences__competence--title">Undertake</p>
                <p class="competences__competence--text">A digital project</p>
            </div>
        </div>

        <div class="content__paragraph">
            <div class="content__paragraph--left">
                <p class="content__paragraph--left--text">This pathway reflects the fusion of different disciplines such as <strong>design, IT, communication and marketing</strong>.</p>
                <p class="content__paragraph--left--text">The first part of the programme focuses on the fundamentals of computing and the web. Students acquire skills in programming, web development and project management. They also explore the basics of graphic design and ergonomics to understand the fundamentals of user experience.</p>
                <p class="content__paragraph--left--text">Secondly, students are introduced to different forms of digital media, from audiovisual content creation to graphic production.</p>

            </div>
            <div class="content__paragraph--right">
                <p class="content__paragraph--right--text">The courses cover specialist software such as Photoshop, Illustrator and After Effects.</p>
                <p class="content__paragraph--right--text">Communication is also covered, with courses on copywriting, visual communication and digital marketing strategies. Students learn how to design and implement online communication campaigns, with an emphasis on social networks, blogs and other digital platforms.</p>
            </div>
        </div>

        <h3 class="content__subtitle">In second degree</h3>
        <h3 class="content__subtitle--margin">3 competences</h3>
        <div class="competences">
            <div class="competences__competence">
                <p class="competences__competence--title">Develop</p>
                <p class="competences__competence--text">Create a simple website and put it online</p>
            </div>
            <div class="competences__competence">
                <p class="competences__competence--title">Undertake</p>
                <p class="competences__competence--text">A digital project </p>
            </div>
            <div class="competences__competence">
                <p class="competences__competence--title">Express</p>
                <p class="competences__competence--text">A message through simple productions</p>
            </div>
        </div>

        <div class="content__paragraph">
            <div class="content__paragraph--left">
                <p class="content__paragraph--left--text">From the second year, students can opt for a sandwich course, combining theoretical training with professional experience. This personalised approach, combined with the sandwich course, gives students a comprehensive and practical training programme to excel in the fields of multimedia and the Internet. If you don't want to opt for the sandwich course, students are required to do a compulsory work placement from March to May in semester 4.
                </p>
            </div>
            <div class="content__paragraph--right">
                <p class="content__paragraph--right--text">From the second year onwards, you can also choose to specialise in the digital creation pathway, acquiring the two key skills of the digital creation pathway: expressing and undertaking. In addition, the development skill remains on the programme until the second year.</p>
            </div>
        </div>


        <h3 class="content__subtitle">In third degree</h3>
        <h3 class="content__subtitle--margin">2 competences</h3>
        <div class="competences">
            <div class="competences__competence">
                <p class="competences__competence--title">Undertake </p>
                <p class="competences__competence--text">A digital project</p>
            </div>
            <div class="competences__competence">
                <p class="competences__competence--title">Express</p>
                <p class="competences__competence--text">A message through simple productions</p>
            </div>
        </div>

        <div class="content__paragraph">
            <div class="content__paragraph--left">
                <p class="content__paragraph--left--text">In the third year, the digital creation pathway takes more shape, focusing exclusively on developing skills in this area. At this stage, students focus entirely on digital creation skills, honing their expertise in this specific area.
                </p>
            </div>
            <div class="content__paragraph--right">
                <p class="content__paragraph--right--text">It is possible to continue or start a sandwich course, but if you do not have a sandwich course, the third year includes a compulsory work placement from February to June.</p>
            </div>
        </div>
    </div>

    <div class="postuler">
        <h2 class="postuler__title">Apply <br /> for mmi BUT</h2>
        <div class="postuler__content">
            <div class="postuler__content--left">
                <p class="postuler__content--left--title">PROFILES</p>
                <p class="postuler__content--left--text">Our course is open to all student profiles. Whether you come from secondary education, other university courses or are looking for a career change, you are most welcome.
                </p>
                <p class="postuler__content--left--text">You don't need to have any previous experience in the multimedia field to enrol on the course. However, it is recommended that you have good computer skills.
                </p>

            </div>
            <div class="postuler__content--right">
                <p class="postuler__content--right--title">REGISTRATION</p>
                <p class="postuler__content--right--text">To register, you need to compile an application file and complete all the stages of the pre-registration process on parcoursup.fr.</p>

                <MyButton href='/candidater' label="APPLY !" color="secondary" font="melodrama" size="big"
                    class="postuler__content--right--button" />

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.top {
    font-size: $h2;
    font-family: $font-satoshi-bold;
    text-align: center;
    color: $secondary-color;
    margin-bottom: rem(128);

    &__title {
        color: $secondary-color;
    }

    &__subtitle {
        color: #8B8BDC;
    }
}

.content {
    margin-left: rem(98);

    &__title {
        font-size: $h2;
        font-family: $font-satoshi-bold;
        margin-bottom: rem(32);
        color: $secondary-color;

    }

    &__subtitle {
        font-size: $button;
        font-family: $font-melodrama;

        &--margin {
            margin-left: rem(98);
            font-size: $button;
            font-family: $font-melodrama;

        }
    }

    &__paragraph {
        display: grid;
        grid-template-columns: auto auto;
        justify-items: center;
        margin-bottom: rem(98);


        &--left {
            width: rem(469);

            &--text {
                margin-bottom: rem(10);

                strong {
                    font-family: $font-satoshi-bold;
                }
            }
        }

        &--right {
            width: rem(469);
            margin-left: rem(-98);

            &--text {
                margin-bottom: rem(10);
            }
        }
    }
}

.competences {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; // Horizontally center the content
    align-items: center; // Vertically center the content
    gap: 20px; // Espace entre les compétences
    width: rem(1020);
    margin: auto;
    margin-top: rem(36);
    margin-bottom: rem(36);

    &__competence {
        font-size: $body;
        color: $white;
        background-color: $secondary-color;
        border-radius: rem(18);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: rem(150);
        width: rem(320);

        &--title {
            font-family: $font-satoshi-bold;
            margin-top: rem(16);
            margin-bottom: rem(30);
        }

        &--text {
            width: rem(300);
        }
    }

}


.postuler {
    margin: auto;
    border: rem(3) solid $secondary-color;
    border-radius: rem(18);
    width: rem(1236);
    position: relative;
    margin-bottom: rem(80);
    color: $secondary-color;


    &__title {
        font-size: $h2;
        font-family: $font-satoshi-bold;
        width: rem(449);
        margin-left: rem(77);
        margin-bottom: rem(96);
        margin-top: rem(48);
    }

    &__content {
        font-size: $body;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        margin-bottom: rem(32);

        &--left {
            margin-left: rem(77);

            &--title {
                font-family: $font-satoshi-bold;
            }

        }

        &--right {
            margin-left: rem(77);
            margin-right: rem(77);
            position: relative;



            &--title {
                font-family: $font-satoshi-bold;
            }


            &--button {

                position: absolute;
                bottom: rem(16);
                right: rem(16);
            }
        }
    }
}



@media screen and (max-width: 767px) {
    .top {
        font-size: $mobile-h2;
        font-family: $font-satoshi-bold;
        text-align: center;
        color: $secondary-color;
        margin-bottom: rem(128);

        &__title {
            color: $secondary-color;
        }

        &__subtitle {
            color: #8B8BDC;
        }
    }

    .content {
        margin-left: rem(0);

        &__title {
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            margin-bottom: rem(32);
            margin-left: rem(30);

        }

        &__subtitle {
            margin-left: rem(30);

            font-size: $mobile-h2;
            font-family: $font-melodrama;

            &--margin {
                margin-left: rem(40);
                font-size: $mobile-h2;
                font-family: $font-melodrama;

            }
        }

        &__paragraph {
            display: flex;
            flex-direction: column;
            justify-items: center;
            align-items: center;
            margin-bottom: rem(98);


            &--left {
                width: rem(313);

                &--text {
                    margin-bottom: rem(10);

                    strong {
                        font-family: $font-satoshi-bold;
                    }
                }
            }

            &--right {
                width: rem(313);
                margin-left: rem(0);

                &--text {
                    margin-bottom: rem(10);
                }
            }
        }
    }

    .competences {
        display: flex;
        flex-wrap: none;
        flex-direction: column;
        justify-content: center; // Horizontally center the content
        align-items: center; // Vertically center the content
        gap: 20px; // Espace entre les compétences
        width: rem(300);
        margin: auto;
        margin-top: rem(36);
        margin-bottom: rem(36);

        &__competence {
            font-size: $mobile-body;
            color: $white;
            background-color: $secondary-color;
            border-radius: rem(18);
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: rem(150);
            width: 100%;

            &--title {
                font-family: $font-satoshi-bold;
                margin-top: rem(16);
                margin-bottom: rem(30);
            }

            &--text {
                width: rem(300);
            }
        }

    }


    .postuler {
        margin: auto;
        border: rem(3) solid $secondary-color;
        border-radius: rem(18);
        width: rem(312);
        position: relative;
        margin-bottom: rem(80);

        &__title {
            font-size: $mobile-h2;
            font-family: $font-satoshi-bold;
            width: rem(113);
            margin-left: rem(30);
            margin-bottom: rem(30);
            margin-top: rem(48);
        }

        &__content {
            font-size: $mobile-body;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: rem(32);

            &--left {
                margin-left: rem(30);

                &--title {
                    font-family: $font-satoshi-bold;
                }

            }

            &--right {
                margin-left: rem(30);
                margin-right: rem(0);
                position: relative;



                &--title {
                    margin-top: rem(20);
                    font-family: $font-satoshi-bold;
                }


                &--button {

                    position: relative;
                    margin-top: rem(30);
                }
            }
        }
    }

}
</style>