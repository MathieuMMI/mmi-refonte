<script setup>

</script>
<template>
    <div class="hero">
        <h2 class="hero__title">LA FORMATION</h2>
        <p class="hero__prargraph">Passionne(é) par les métiers du web ?</p>
        <div>
            <div class="hero__left">
                <img src="" alt="">
                <img src="" alt="">
                <h2 class="hero__left--title">Programme pédagogique</h2>
                <p class="hero__left--paragraph">Le BUT MMI est une formation pluridisciplinaire qui s'articule autour de
                    trois axes fondamentaux : le design, le développement et la communication. Inspirés par les pratiques
                    professionnelles, nous formons des étudiants polyvalents sur l'ensemble des corps de métier du web.
                </p>
            </div>
            <div class="hero__right">
                <img src="" alt="">
                <img src="" alt="">
            </div>
        </div>
    </div>
    <div class="bases">
        <MyEllipse />
        <div class="bases__body">
            <div class="bases__body--left">
                <h2 class="bases__title">Acquérirles bases</h2>
                <p class="bases__paragraph">La communication orale est importante dans notre formation. Différents exercices
                    de présentation vous permettront de perfectionner vos <strong>compétences communicationnelles</strong>.
                    Vous saurez alors
                    gérer votre stress, corriger vos tics gestuels et verbaux et améliorer votre prestance.

                    Les cours d'<strong>expression artistique</strong> et esthétique vous donneront les bases pour réaliser
                    des designs
                    fonctionnels. Cet enseignement passe par l'apprentissage de l'histoire du graphisme, de ses pratiques et
                    par l'utilisation d'outils logiciels tels ceux proposés par la suite Adobe.</p>
            </div>
            <div class="bases__body--right">
                <p class="bases__paragraph">
                    Des enseignements dédiés au <strong>développement web</strong> traiteront des langages tels que HTML,
                    CSS3 et PHP.
                    D'autres langages, importants pour le développement d'applications (JAVA), seront également abordés.

                    Le Projet Personnel et Professionnel est l'occasion de découvrir le <strong>milieu
                        professionnel</strong> du multimédia.
                    En dialoguant avec des <strong>professionnels</strong> du domaine, chaque étudiant peut alors déterminer
                    son choix
                    d'orientation selon ses compétences et ses aspirations.
                    Au cours de ce semestre, vous réaliserez votre premier projet individuel.

                    La <strong>conception</strong> et le développement d'un site web mobile vous obligera à mettre en
                    pratique l'ensemble des
                    enseignements suivis durant les mois de septembre à décembre.
                </p>
                <MyEllipse />
            </div>
        </div>
    </div>
    <div class="fondamentaux">
        <h2 class="fondamentaux__title">Asseoir les fondamentaux</h2>
        <div class="fondamentaux__paragraph">
            <p>La réalisation de projets est au cœur de la formation MMI. Des travaux concrets permettent d'éprouver
                l'ensemble des compétences acquises durant le semestre 2. La créativité des étudiants s'exprime durant les
                cours de gestion de projets et leur capacité à travailler en équipe est évaluée à l'occasion d'un projet
                collectif.

                Au cours de ce semestre, des professionnels expérimentés de l'intégration web vous guideront dans le
                développement d'interfaces dynamiques fonctionnelles.
            </p>
            <p>Vous renforcerez également vos compétences techniques à travers la réalisation d'une application mobile ou
                encore d'un site de data visualisation, des domaines essentiels qui constituent un véritable enjeu pour le
                web de demain.

                Vous découvrirez de nouveaux logiciels tels que Adobe Illustrator pour réaliser des illustrations et des
                supports de communication. Les projets vidéo, quant à eux, vous permettront de maîtriser les logiciels de
                montage audio/vidéo comme Adobe Premiere ou encore Adobe Audition.</p>
        </div>
    </div>

    <div class="parcours">
        <h2 class="parcours__title">3 parcours</h2>
        <div class="parcours__flex">
            <div class="parcours__cn">
                <MyEllipse />
                <p class="parcours_text">PARCOURS CRÉATION NUMÉRIQUE</p>
            </div>
            <div class="parcours__ceu">
                <MyEllipse />
                <p class="parcours_text">PARCOURS COMMUNICATION ET EXPERIENCE UTILISATEUR</p>
            </div>
            <div class="parcours__dw">
                <MyEllipse />
                <p class="parcours_text">PARCOURS DÉVELOPPEMENT WEB</p>
            </div>
        </div>
    </div>

    <div class="debouche">
        <MyDebouche />
    </div>
    <MyButton />
</template>
<style lang="scss"></style>