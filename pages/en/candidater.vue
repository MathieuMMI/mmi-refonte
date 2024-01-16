<template>
    <div class="candidater">
        <h2 class="candidater__title">APPLY</h2>
        <p class="candidater__paragraph">If you want to join us, it's this way !</p>
        <div class="candidater__arrow">
            <MyArrow />
            <p class="candidater__arrow--paragraph">Registration is now open.</p>
        </div>
    </div>
    <div class="selection">
        <h3 class="selection__title">Selection criteria</h3>
        <p class="selection__paragraph">If you feel it's right for you…</p>
        <ul>
            <p class="selection__bold">Technical skills</p>
            <li>An interest in techniques associated with digital communication. </li>
            <li>Curiosity and interest in website creation, video production and social networking.</li>
            <li>Be familiar with the Internet and digital technology.</li>
            <li>Know how to mobilize knowledge to solve a problem.</li>
            <li>Ability to develop structured scientific/logical reasoning adapted to a given situation.</li>
        </ul>
        <ul>
            <p class="selection__bold">General skills</p>
            <li>Have a good command of the French language, enabling you to communicate appropriately in writing and orally, understand a statement, analyze it and draft a solution,</li>
            <li>Creativity and curiosity about design and the tools used (drawing, graphics, computer graphics, design, prototyping, etc.),</li>
            <li>Have a sufficient knowledge of a foreign language, preferably English, to enable them to progress during their training. Be able to speak, read and understand a text, and answer written and oral questions,</li>
            <li>Know how to mobilize knowledge and develop a critical sense,</li>
            <li>Be able to work in a digital environment and have basic knowledge of office automation.</li>
        </ul>
    </div>
    <div class="card">
        <MyCardEN />
    </div>
</template>
<style lang="scss" scoped>
.candidater {
    margin-left: rem(70);

    &__title {
        font-size: $h2;
        font-family: $font-satoshi-bold;
    }

    &__paragraph {
        font-family: $font-satoshi-bold;
        font-size: $body;
        color: #8B8BDC;
    }

    &__arrow {
        display: flex;
        align-items: center;
        justify-content: center;

        &--paragraph {
            width: rem(150);
            font-weight: bold;
        }
    }

}

.selection {
    margin-left: rem(70);

    &__title {
        font-size: $h3;
        color: $secondary-color;
        font-family: $font-satoshi-bold;
    }

    &__paragraph {
        font-family: $font-satoshi-bold;
        font-size: $body;
        color: #8B8BDC;
    }

    &__bold {
        font-size: $body;
        font-family: $font-satoshi-bold;
        margin-bottom: rem(20);
        margin-top: rem(32);

    }

    li {
        margin-bottom: rem(16);
        margin-left: rem(36);
        text-decoration: solid;
    }
}

.card {
    margin-top: rem(100);
    margin-bottom: rem(48);
}

@media screen and (max-width: 767px) {
    .candidater {
        margin-left: rem(0);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__title {
            font-size: $mobile-h1;
            font-family: $font-satoshi-bold;
        }

        &__paragraph {
            font-family: $font-satoshi-bold;
            font-size: $mobile-body;
            color: #8B8BDC;
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

    .selection {
        margin-left: rem(30);


        &__title {
            font-size: $mobile-h2;
            color: $secondary-color;
            font-family: $font-satoshi-bold;
        }

        &__paragraph {
            font-family: $font-satoshi-bold;
            font-size: $mobile-body;
            color: #8B8BDC;
        }

        &__bold {
            font-size: $mobile-body;
            font-family: $font-satoshi-bold;
            margin-bottom: rem(20);
            margin-top: rem(32);

        }

        li {
            margin-bottom: rem(16);
            margin-left: rem(30);
            margin-right: rem(30);
            text-decoration: solid;
        }
    }

    .card {
        margin-top: rem(100);
        margin-bottom: rem(48);
    }
}
</style>