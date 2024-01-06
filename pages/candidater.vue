<template>
    <div class="candidater">
        <h2 class="candidater__title">CANDIDATER</h2>
        <p class="candidater__paragraph">Si tu veux nous rejoindre c'est par ici !</p>
        <div class="candidater__arrow">
            <MyArrow />
            <p class="candidater__arrow--paragraph">Par ici les inscriptions.</p>
        </div>
    </div>
    <div class="selection">
        <h3 class="selection__title">Critères de sélection</h3>
        <p class="selection__paragraph">Si tu as l'impression que ça te correspond... </p>
        <ul>
            <p class="selection__bold">Compétences techniques</p>
            <li>Avoir un intérêt pour les techniques associées à la communication numérique.</li>
            <li> Avoir une curiosité et de l'intérêt pour la création de site web, réalisations de vidéos, animation d'un
                réseau social.</li>
            <li> Avoir un usage courant d'Internet et du numérique.</li>
            <li> Savoir mobiliser ses connaissances pour répondre à une résolution de problème.</li>
            <li> Savoir élaborer un raisonnement scientifique/logique structuré et adapté à une situation.</li>
        </ul>
        <ul>
            <p class="selection__bold"> Compétences générales</p>
            <li>Avoir une maitrise du français permettant de communiquer à l'écrit et à l'oral de façon adaptée, de
                comprendre un
                énoncé, de l'analyser et de rédiger une solution</li>
            <li>Avoir de la créativité et une curiosité pour le design ou les outils utilisés (dessin, graphisme,
                infographie, conception, prototypage…)</li>
            <li> Avoir une connaissance suffisante d'une langue vivante étrangère de préférence l'anglais permettant de
                progresser pendant la formation échanger à l'oral, lire et comprendre un texte, répondre aux questions
                écrites et orales</li>
            <li> Savoir mobiliser ses connaissances et développer un sens critique</li>
            <li> Être capable d'évoluer dans un environnement numérique et détenir des connaissances de base en bureautique.
            </li>
        </ul>
    </div>
    <div class="card">
        <MyCard />
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
</style>