<template>
    <div class="espace">
        <h2 class="espace__title">PROFESSIONAL SPACE</h2>
        <p class="espace__paragraph">Discover the opportunities that training offers you !</p>
    </div>

    <div class="projet">
        <div class="projet__left">
            <MyEllipse color="primary" size="tiny" class="projet__left--ellipse" />
            <h2 class="projet__left--title">Suggest a project?</h2>
            <p class="projet__left--text">Are you an association looking to enhance your communications around a website or mobile application? You can propose a collective project.</p>
            <p class="projet__left--text">In doing so, you'll become a sponsor and help put into practice the skills acquired by our students.</p>
            <p class="projet__left--text">Submit your project !</p>
        </div>
        <div class="projet__right">
            <MyProjet />
            <MyButton href='' label="SUBMIT A PROJECT ?" color="borderw" font="melodrama" size="big" />
            <MyEllipse color="primary" size="tiny" class="projet__right--ellipse" />
        </div>
    </div>

    <div class="alternance">
        <div class="alternance__left">
            <MyButton href='' label="SUBMIT A PROJECT ?" color="borderb" font="melodrama" size="big" />
            <MyEllipse color="primary" size="big" class="alternance__left--ellipse" />
            <MyCalendrier />

        </div>
        <div class="alternance__right">
            <h2 class="alternance__right--title">Propose a work-study program ?</h2>
            <p class="alternance__right--text">You can also take on an apprenticeship student from the second year onwards.</p>
            <p class="alternance__right--text">The apprenticeship lasts 2 weeks: 10 days at the company, 3 days at the department. Unless there are special conditions, students have 5 weeks' vacation.</p>
            <p class="alternance__right--text">Contact us to adopt an apprentice !</p>
        </div>
    </div>

    <div class="stage">
        <div class="stage__left">
            <h2 class="stage__left--title">Propose an internship ?</h2>
            <p class="stage__left--text">To validate their semester and obtain their diploma, our students must complete a 12-week work placement (in the second year) or a 16-week placement (in the third year).</p>
            <p class="stage__left--text">They put into practice all the knowledge they have acquired during their training. They work in a wide range of fields, from start-ups to more traditional companies, from digital communications agencies to regional associations.</p>
            <p class="stage__left--text">If their projects have caught your attention, don't hesitate to submit your offers via our form.</p>
        </div>
        <div class="stage__right">
            <MyButton href='' label="SUBMIT A PROJECT ?" color="borderb" font="melodrama" size="big" />
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
    height: 100%;
    padding: rem(50);

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
    height: 100%;
    padding: rem(100);

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
    height: 100%;
    padding: rem(50);

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