<script setup>

</script>
<template>
    <div class="hero">
        <h2 class="hero__title">LES EXTRAS</h2>
        <!--<Students />-->
        <Projets />
        <p class="hero__prargraph">Tes raisons de choisir MMI Montbéliard !</p>
        <div class="hero__img">
            <div class="hero__img--left">
                <img src="" alt="">
                <img src="" alt="">
            </div>
            <div class="hero__img--right">
                <img src="" alt="">
                <img src="" alt="">
            </div>
        </div>
    </div>

    <div class="canada">
        <h2 class="canada__title">Semestre au Canada</h2>
        <div class="canada__flex">
            <div class="canada__flex--left">
                <img src="" alt="" class="canada__img">
                <p class="canada__text">
                    Notre département est partenaire avec deux CEGEP canadiens. Chaque année, une dizaine d'étudiants MMI
                    effectue son troisième ou quatrième semestre dans l'une de ces formations.
                </p>
            </div>
            <div class="canada__flex--right">
                <p class="canada__text">
                    À Montréal, Le CEGEP Vanier accueille nos étudiants pour un semestre de formation orienté vers les
                    travaux d'impression. Au CEGEP de Matane, nos étudiants peuvent intégrer le programme "techniques
                    d'intégration multimédia".
                </p>
                <img src="" alt="" class="canada__img">
            </div>
        </div>
    </div>

    <div class="offf">
        <h2 class="offf__title">Le festival OFFF</h2>
        <div class="offf__blue-line"></div>
        <img src="" alt="" class="offf__img">
        <div class="offf__blue-line"></div>
        <p class="offf_paragraph">
            Notre département organise un déplacement à Barcelone à l'occasion du OFFF, festival
            international d'art digital.
            Nos étudiants enrichissent leur culture artistique en découvrant, d'une part, le travail des acteurs majeurs de
            la scène numérique internationale et d'autre part, la richesse culturelle de cette ville.</p>
    </div>

    <div class="defi">
        <div class="defi__text">
            <h2 class="defi__text--title">Le défis 24h</h2>
            <p class="defi__text--paragraph">
                Le principe est simple : réaliser une création multimédia autour d'un sujet
                donné dans un temps imparti, 24 heures. Pour corser les choses, l'évènement est ponctué d'un certain nombre
                de défis "surprise" ! Les locaux du département sont à votre disposition le temps de ce véritable challenge.
                Le défi 24h, c'est du rire, de l'émotion et des cascades !</p>
        </div>
        <img src="" alt="" class="defi__img">
    </div>

    <div class="stage">
        <h2 class="stage__title">Stage et Alternance</h2>
        <p class="stage__paragraph">Nous maintenons depuis plusieurs années des relations avec des <strong> partenaires
                extérieurs</strong>.
            Ainsi, nous offrons la possibilité à nos étudiants d'effectuer leur stage ainsi que leur alternance à
            l' <strong>étranger</strong>. Cette expérience unique et enrichissante leur permet d'améliorer leurs compétences
            <strong> linguistiques</strong>
            tout en approfondissant leurs connaissances <strong>techniques</strong>.
        </p>
    </div>


    <div class="projet">
        <div class="projet__left">
            <MyEllipse />
            <h2 class="projet__title">Projets et présentation de projets étudiants</h2>
            <p class="projet__paragraph">Mise en application des connaissances acquises en cours, les projets sont pour les
                étudiants l'occasion de prouver leur savoir-faire. Toutes les étapes, de la réflexion au déploiement, sont
                autant d'étapes de validation pour mener les étudiants vers la réussite de leurs projets.
                Voici quelques projets des anciens étudiants du BUT MMI.</p>
        </div>
        <div class="projet__right">
            <!-- projet -->
            <MyEllipse />
        </div>
    </div>

    <div class="international">
        <h2 class="international__title">Tu souhaites un jour travailler à l'international ?</h2>
        <div class="paragraph__arrow">
            <svg></svg>
            <p class="paragraph_arrow--paragraph">Découvrez toutes les facettes de la formation.</p>
        </div>
        <Students />


    </div>
</template>
<style lang="scss"></style>