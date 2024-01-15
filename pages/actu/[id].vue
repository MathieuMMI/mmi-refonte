<script setup>
const router = useRoute();
const IdActu = ref('');
const { client } = usePrismic();
IdActu.value = router.params.id || '';

const { data: actupage } = await useAsyncData('news', () => client.getByID(IdActu.value));

// variables pour le contenu
const titre = actupage.value.data.news_title[0].text;
const accroche = actupage.value.data.news_hook[0].text;
const description = actupage.value.data.news_desc[0].text;
const date = actupage.value.data.news_date[0].text;
const image = actupage.value.data.news_img.url;
const imageALT = actupage.value.data.news_img.alt;
</script>

<template>
  <div class="actu">
    <h2 class="actu__title">Actualité</h2>
    <h3 class="actu__subtitle">{{ titre }}</h3>
    <p class="actu__date">{{ date }}</p>
    <p class="actu__accroche">{{ accroche }}</p>
    <p class="actu__description">{{ description }}</p>
    <img :src="image" :alt="imageALT" class="actu__img" />
  </div>
</template>

<style lang="scss">
.actu {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    color: $black;
    font-size: $h2;
    font-family: $font-satoshi-bold;

  }

  &__subtitle {
    color: $grey;
    font-size: $h3;
    font-family: $font-satoshi-bold;
  }

  &__date {
    color: $grey;
    font-size: $h3;
    font-family: $font-satoshi-bold;
    margin-bottom: rem(90);
  }

  &__accroche {
    color: $black;
    font-size: $body;
    font-family: $font-satoshi;
    margin-bottom: rem(16);

  }

  &__description {
    color: $black;
    font-size: $body;
    font-family: $font-satoshi;
  }

  &__img {}
}

@media screen and (max-width: 767px) {
  .actu {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      color: $black;
      font-size: $mobile-h2;
      font-family: $font-satoshi-bold;

    }

    &__subtitle {
      color: $grey;
      font-size: $mobile-body;
      font-family: $font-satoshi-bold;
    }

    &__date {
      color: $grey;
      font-size: $mobile-body;
      font-family: $font-satoshi-bold;
      margin-bottom: rem(90);
    }

    &__accroche {
      color: $black;
      font-size: $mobile-body;
      font-family: $font-satoshi;
      margin-bottom: rem(16);

    }

    &__description {
      color: $black;
      font-size: $mobile-body;
      font-family: $font-satoshi;
    }

    &__img {}
  }
}
</style>