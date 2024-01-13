<script setup>

</script>
<template>
    <div class="container">
        <div class="line"></div>

        <div class="footer">
            <div class="footer__left">
                <p class="footer__title">DÉPARTEMENT MÉTIERS DU MULTIMÉDIA & DE L'INTERNET DE MONTBÉLIARD</p>
                <p class="footer__mail">
                    Mail BUT MMI :
                    <a href="mailto:but-mmi-montbeliard@univ-fcomte.fr" class="footer__mail--to">
                        but-mmi-montbeliard@univ-fcomte.fr</a>
                </p>
                <p class="footer__adresse">4 place Tharradin 25 200 Montbéliard</p>
                <p class="footer__tel">Tél : +33 (0)3 81 99 47 34 </p>
                <ul class="footer__liste">
                    <li>
                        <MyGoogle />
                    </li>
                    <li>
                        <MyFacebook />
                    </li>
                    <li>
                        <MyLinkedIn />
                    </li>
                    <li>
                        <MyInstagram />
                    </li>
                    <li>
                        <MyX />
                    </li>
                </ul>
            </div>

            <ul class="footer__right">
                <li>
                    <RouterLink class="footer__right--link" to="/">Accueil</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer__right--link" to="/departement">Département</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer__right--link" to="/formation">La Formation</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer__right--link" to="/extras">Les Extras</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer__right--link" to="/contact">Contact</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer__right--link" to="/faq">FAQ</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer__right--link" to="/mentions-legales">Mentions Légales</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>



<style lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.line {
    background-color: $secondary-color; // Adjust the color as needed
    height: 3px;
    width: 70%;
    margin-bottom: rem(40);
}

.footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    font-size: $body;

    &__left {
        margin: rem(20);
    }

    &__title {
        font-weight: bold;
        margin-bottom: rem(20);
        font-family: $font-satoshi-bold;
    }

    &__mail {
        margin-bottom: rem(10);

        &--to {
            text-decoration: none;
            color: $black;

            &:hover {
                color: $primary-color; // Change to your desired hover color
            }
        }
    }

    &__adresse {
        margin-bottom: rem(10);
    }

    &__tel {
        margin-bottom: rem(20);
    }

    &__liste {
        display: flex;
        gap: rem(20); // Adjust the gap as needed
    }

    &__right {
        &--link {
            text-decoration: none;
            color: $black;

            &:hover {
                color: $primary-color; // Change to your desired hover color
            }
        }
    }
}
</style>

