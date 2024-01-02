<script setup>

</script>
<template>
    <h1>Département MMI</h1>
    <div> <!-- liens à mettre dans le menu -->
        <RouterLink to="/formation">La formation</RouterLink>
        <p></p>
        <RouterLink to="/departement">Le département</RouterLink>
        <p></p>
        <RouterLink to="/extras">Les extras</RouterLink>
        <p></p>
        <RouterLink to="/espace-pro">Espace pro</RouterLink>
        <p></p>
        <RouterLink to="/Contact">Contact</RouterLink>
    </div>
    <div> <!-- liens pour accéder rapidement aux pages mais à supprimer -->
        <p>Liens temporaires</p>
        <RouterLink to="/candidater">Candidater</RouterLink>
        <p></p>
        <RouterLink to="/FAQ">FAQ</RouterLink>
        <p></p>
        <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
        <p></p>
        <RouterLink to="/parcours-com">Parcours com</RouterLink>
        <p></p>
        <RouterLink to="/parcours-crea">Parcours créa</RouterLink>
        <p></p>
        <RouterLink to="/parcours-dev">Parcours dev</RouterLink>
        <p></p>
    </div>


    <div class="hero">
        <h1 class="hero__title">MMI MONTBÉLIARD</h1>
        <p class="hero__paragraph">Vous former aux métiers du web : tel est l'objectif du BUT MMI. En trois ans, vous serez
            capable de concevoir et de réaliser des produits et services multimédia en ligne.
        </p>
        <MyButton />
        <div class="hero__blue-line"></div>
        <img src="" alt="" class="hero__img">
        <h2 class="hero__h2">Métiers du Multimédia & de l'Internet</h2>
        <div class="hero__blue-line"></div>
    </div>

    <div class="cursus">
        <p class="cursus__paragraph">Ce cursus dispensé en formation initiale ou en <strong> alternance</strong> à partir de
            la deuxième année
            permet un accès direct à la vie <strong> professionnelle </strong>et autorise diverses poursuites d'études.</p>
        <MyCursus />
    </div>

    <div class="parcours">
        <h2 class="parcours_title">3 PARCOURS</h2>
        <p class="parcours_body">Tu es plutôt créa ? Comm ? Dev ?</p>

        <MyParcours />
    </div>

    <div class="decouvrir">
        <h2 class="decouvrir__title">EN DÉCOUVRIR DAVANTAGE</h2>
        <div class="decouvrir__arrow">
            <svg></svg>
            <p class="decouvrir_arrow--paragraph">Découvrez toutes les facettes de la formation.</p>
        </div>
        <MyDecouvrirs />
    </div>

    <div class="international">
        <h2 class="international__title--orange"> MMI À</h2>
        <h2 class="international__title">L'INTERNATIONAL</h2>
        <MyMap />

        <div class="international__canada">
            <p class="international__canada--body--bold">Canada</p>
            <p class="international__canada--body">Montréal / Matane</p>
        </div>
        <div class="international__canada">
            <p class="international__canada--body--bold">Espagne</p>
            <p class="international__canada--body">Barcelone</p>
        </div>
        <div class="international__canada">
            <p class="international__canada--body--bold">Inde</p>
        </div>
        <div class="international__canada">
            <p class="international__canada--body--bold">Australie</p>
        </div>
        <div class="international__end">
            <p>Notre BUT offre aux étudiants la possibilité de suivre un semestre complet à l'étranger dans des CÉGEP
                (collège
                d'enseignement général et professionnel) partenaires au <strong>Canada</strong>.

                Les stages et les alternances sont également l'occasion de tenter la mobilité internationale.</p>

            <MyButton />
        </div>
        <MyEllipse size="big" color="tri" />
        <MyEllipse />
    </div>
</template>


<style lang="scss"></style>