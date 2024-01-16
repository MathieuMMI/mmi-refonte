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
.button {
    align-items: center;
    border: none;
    border-radius: rem(30);
    color: $white;
    display: inline-flex;
    font-size: $body;
    text-decoration: none;
    padding: rem(10);

    &.-big {
        font-size: $body;
        padding: rem(16) rem(32);
        font-weight: 400;
    }

    &.-pro {
        border: solid 1px !important;

        &:hover {
            background-color: #FFA51D;
        }
    }

    &.-candidater {
        font-size: $body;
        padding: rem(10);
        padding-right: rem(70);
        padding-left: rem(70);
        font-weight: 400;
    }

    &.-candidater {
        font-size: $body;
        padding: rem(10);
        padding-right: rem(70);
        padding-left: rem(70);
        font-weight: 400;
    }


    &.-secondary {
        background: $secondary-color;
        color: $white;
    }

    &.-primary {
        background: $primary-color;
        color: $black;
    }

    &.-black {
        background: $black;
        color: $white;
    }

    &.-white {
        background: $white;
        color: $black;
    }

    &.-border {
        background: $white;
        color: $secondary-color;
        border: rem(3) solid $secondary-color;

    }

    &.-borderw {

        color: $white;
        border: rem(3) solid $white;

    }

    &.-borderb {

        color: $black;
        border: rem(3) solid $black;

    }

    &.-satoshi {
        font-family: $font-satoshi;
    }

    &.-satoshib {
        font-family: $font-satoshi-bold;
    }

    &.-melodrama {
        font-family: $font-melodrama;
    }

    &.-melodramab {
        font-family: $font-melodrama-bold;
    }
}
</style>