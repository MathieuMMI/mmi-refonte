<script setup>

</script>
<template>
    <div class="content">
        <div class="parcoursup">
            <h2 class="parcoursup__title">Parcoursup</h2>
            <p class="parcoursup__text">Registering with Parcoursup is simple and intuitive. Go to our website, create your account, and start exploring the many possibilities open to you.</p>
            <p class="parcoursup__text">Carefully fill in your application, highlighting your skills, your academic background and your plans for the future.</p>
            <p class="parcoursup__text">The Parcoursup team is there to support you every step of the way, ensuring a transparent and fair process.</p>
            <div class="parcoursup__button">
                <MyButton href="https://www.parcoursup.gouv.fr/" label="PARCOURSUP CANDIDACY" color="white"
                    font="melodrama" size="big" />
            </div>

        </div>
        <div class="ecandidat">
            <h2 class="ecandidat__title">E candidat</h2>
            <p class="ecandidat__text">Registering with e-candidat is the first step towards exciting new opportunities.</p>
            <p class="ecandidat__text">Don't delay, join us now. We look forward to being part of your journey to success.</p>
            <p class="ecandidat__text">Register today and open the door to a promising future on e-candidat !</p>
            <div class="ecandidat__button">
                <MyButton href="https://admission.univ-fcomte.fr/11-ecandidat.php" label="E-CANDIDAT CANDIDACY"
                    color="border" font="melodrama" size="big" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.content {
    display: grid;
    grid-template-columns: auto auto;
    gap: rem(76);
}


.parcoursup {
    background-color: $black;
    border: none;
    border-radius: rem(18);
    color: $white;
    font-size: $body;
    margin-left: rem(102);

    &__title {
        font-weight: bold;
        font-size: $h2;
        margin: rem(52);
        font-family: $font-satoshi-bold;
    }

    &__text {
        margin: rem(52);
        font-family: $font-satoshi;

    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: rem(40);
    }
}

.ecandidat {
    border: rem(2) solid $secondary-color;
    border-radius: rem(18);
    color: $secondary-color;
    margin-right: rem(102);
    font-size: $body;


    &__title {
        font-weight: bold;
        font-size: $h2;
        margin: rem(52);
        font-family: $font-satoshi-bold;


    }

    &__text {
        margin: rem(52);
        font-family: $font-satoshi;

    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: rem(40);
    }
}

@media screen and (max-width: 767px) {
    .content {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        gap: rem(76);
    }


    .parcoursup {
        background-color: $black;
        border: none;
        border-radius: rem(18);
        color: $white;
        font-size: $mobile-body;
        margin-left: rem(0);
        width: rem(312);

        &__title {
            font-weight: bold;
            font-size: $mobile-h2;
            margin: rem(52);
            font-family: $font-satoshi-bold;
        }

        &__text {
            margin: rem(52);
            font-family: $font-satoshi;

        }

        &__button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: rem(40);
        }
    }

    .ecandidat {
        border: rem(2) solid $secondary-color;
        border-radius: rem(18);
        color: $secondary-color;
        margin-right: rem(0);
        font-size: $mobile-body;
        width: rem(312);


        &__title {
            font-weight: bold;
            font-size: $mobile-h2;
            margin: rem(52);
            font-family: $font-satoshi-bold;


        }

        &__text {
            margin: rem(52);
            font-family: $font-satoshi;

        }

        &__button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: rem(40);
        }
    }
}
</style>