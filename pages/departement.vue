<script setup>

</script>
<template>
  <RouterLink to="/Contact">Contact</RouterLink>
  <p></p>
  <RouterLink to="/FAQ">FAQ</RouterLink>
  <p></p>
  <RouterLink class="home" to="/">Accueil</RouterLink>

  <div class="hero">
    <h2 class="hero__title">LE DÉPARTEMENT</h2>
    <p class="hero__prargraph">Viens nous rencontrer !</p>
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
    <div class="paragraph">
      <div class="paragraph__left">
        <p class="paragraph__left--text">Le département <strong>MMI de Montbéliard</strong> forme des
          <strong>professionnels du
            web</strong> et du <strong>multimédia</strong> en ligne depuis plus de quinze ans. Chaque année, quatre-vingt
          nouveaux
          étudiants nous rejoignent
          afin de devenir les futurs acteurs du <strong>monde numérique</strong>.
        </p>
        <p class="paragraph__left--text">En collaboration constante avec des professionnels du domaine, notre équipe
          pédagogique s'engage à vous former en trois ans aux métiers du web à travers un enseignement pluridisciplinaire
          de qualité.
        </p>
        <div class="paragraph__arrow">
          <svg></svg>
          <p class="paragraph_arrow--paragraph">Découvrez toutes les facettes de la formation.</p>
        </div>
      </div>
      <div class="paragraph__right">
        <p class="paragraph__right--text">En 2013, notre département se classe ainsi 5ème au palmarès Figaro des écoles du
          web.
        </p>
        <p class="paragraph__right--text">En France comme à l'étranger, nos diplômés sont reconnus pour leurs aptitudes à
          dialoguer avec les spécialistes des différents métiers du web et à développer le design communicant de demain.
        </p>
      </div>
    </div>
  </div>
  <div class="departement">
    <img src="" alt="" class="departement__img">
  </div>

  <div class="equipe">
    <MyEllipse color="primary2" size="giant" class="equipe__ellipse" />
    <div class="equipe__content">
      <div class="equipe__content--title">
        <h2 class="equipe__content--title--melodrama">L'équipe</h2>
        <h2 class="equipe__content--title--satoshi">PÉDAGOGIQUE</h2>
      </div>
      <div class="equipe__content--text">
        <p class="equipe__content--paragraph">Cette formation a pour but de préparer ses étudiants aux métiers du web dans
          les secteurs de la programmation,
          de la communication, du marketing ou du graphisme.</p>
        <p class="equipe__content--paragraph">Cette diversité et cette complémentarité se retrouvent évidemment dans une
          équipe pédagogique
          pluridisciplinaire constituée d'enseignants permanents, d'intervenants professionnels et de jeunes chercheurs de
          l'Université de Franche-Comté.</p>
      </div>
    </div>
    <Teachers />
  </div>


  <div class="actualite">
    <MyEllipse />
    <h2 class="actualite__title">Ce qu'il se passe au département...</h2>
    <Actus />

    <MyButton />
  </div>
</template>
<style lang="scss">
.equipe {
  background-color: $black;
  color: $white;
  position: relative;

  &__ellipse {
    position: absolute;
    top: rem(-336);
    left: rem(-336);
  }


  &__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: rem(146);
    height: 50vh;
    margin-left: rem(60);
    margin-right: rem(60);

    &--title {
      align-self: end;
      font-size: $h2;
      font-family: $font-satoshi-bold;

      &--melodrama {}

      &--satoshi {
        font-weight: bold;
      }
    }

    &--text {
      font-size: $body;
      align-self: end;
    }

    &--paragraph {
      margin-top: rem(62);
    }
  }
}
</style>