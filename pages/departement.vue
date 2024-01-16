<script setup>

</script>
<template>
  <div class="hero">
    <h2 class="hero__title">LE DÉPARTEMENT</h2>
    <p class="hero__paragraph">Viens nous rencontrer !</p>
    <div class="hero__img">
      <div class="hero__img--left">
        <img src="../assets/departement1.jpg" alt="image">
        <img src="../assets/departement2.jpg" alt="image">
      </div>
      <div class="hero__img--right">
        <img src="../assets/departement3.jpg" alt="image">
        <img src="../assets/departement4.jpg" alt="image">
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
    <div class="paragraph__arrow">
      <MyArrow />
      <p class="paragraph__arrow--paragraph">Découvrez notre département.</p>
    </div>
  </div>
  <div class="video">
    <video controls width="100%" height="auto" autoplay muted>
      <source src="../assets/mmi.mp4" type="video/mp4">
    </video>
  </div>

  <div class="equipe">
    <MyEllipse color="primary2" size="big" class="equipe__ellipse" />
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
    <MyEllipse size="giant" color="primary2" class="actualite__ellipse" />
    <h2 class="actualite__title">Ce qu'il se passe <br /> au département...</h2>
    <Actus />
  </div>
</template>

<style lang="scss" scoped>
.hero {
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

  &__img {
    display: grid;
    grid-template-columns: 1.75fr 1fr;
    margin-bottom: rem(80);
  }
}

.paragraph {
  display: grid;
  grid-template-columns: auto auto;
  font-family: $font-satoshi;
  justify-content: center; /* Center the content horizontally */
  gap: 20%;

  &__left,
  &__right {
    width: rem(500);

    &--text {
      margin-bottom: rem(32);

      strong {
        font-family: $font-satoshi-bold;
      }
    }
  }

  &__arrow {
    display: flex;
    align-items: center;
    justify-content: center;

    &--paragraph {
      width: rem(150);
      font-weight: bold;
      font-family: $font-satoshi-bold;
    }
  }
}

@media screen and (max-width: 1330px) {
  .paragraph {
  gap: 0%;
  }
}

.video {
  max-width: 100%;
  height: auto;
}

.equipe {
  background-color: $black;
  color: $white;
  position: relative;

  &__ellipse {
    position: absolute;
    top: rem(-236);
    left: rem(-286);
  }


  &__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: rem(146);
    margin-left: rem(60);
    margin-right: rem(60);

    &--title {
      align-self: end;
      font-size: $h2;
      font-family: $font-satoshi-bold;

      &--melodrama {
        font-family: $font-melodrama;
      }

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

.actualite {
  position: relative;

  &__ellipse {
    position: absolute;
    left: rem(-400);
    top: rem(-400);
    z-index: -1;
  }

  &__title {
    margin-top: rem(25);
    font-size: $h2;
    font-family: $font-satoshi-bold;
  }

}
@media screen and (max-width: 1000px) {

  .hero {
    margin-left: rem(0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

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
    }

    &__img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      text-align: center;
      gap: rem(30);
      margin-bottom: rem(0);

      &--left {
        display: none;
      }
    }
  }

  .paragraph {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    font-family: $font-satoshi;
    margin-top: rem(60);

    &__left {
      width: rem(312);

      &--text {
        margin-bottom: rem(32);

        strong {
          font-family: $font-satoshi-bold;
        }
      }
    }

    &__right {
      width: rem(312);

      &--text {
        margin-bottom: rem(32);
      }
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

  .video {
    max-width: 100%;
    height: auto;
  }

  .equipe {
    background-color: $black;
    color: $white;
    position: relative;
    // display: none;

    &__ellipse {
      position: absolute;
      top: rem(-236);
      left: rem(-286);
    }


    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      margin-bottom: rem(146);
      margin-left: rem(0);
      margin-right: rem(00);

      &--title {
        align-self: center;
        text-align: center;
        font-size: $mobile-h2;
        font-family: $font-satoshi-bold;
        margin-top: rem(20);

        &--melodrama {
          font-family: $font-melodrama;
        }

        &--satoshi {
          font-weight: bold;
        }
      }

      &--text {
        font-size: $mobile-body;
        align-self: end;
      }

      &--paragraph {
        margin-top: rem(62);
        margin-left: rem(40);
        margin-right: rem(39);
      }
    }
  }

  .actualite {
    position: relative;
    width: 100%;
    overflow: hidden;

    &__ellipse {
      position: absolute;
      left: rem(-400);
      top: rem(-400);
      z-index: -1;
    }

    &__title {
      margin: rem(54);
      margin-top: rem(100);
      font-size: $mobile-h2;
      font-family: $font-satoshi-bold;
    }


  }

}
</style>