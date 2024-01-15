<script setup>
const router = useRoute();
const IdActu = ref('');
const { client } = usePrismic();
IdActu.value = router.params.id || '';

const { data: actupage } = await useAsyncData('news', () => client.getByID(IdActu.value));

// variables pour le contenu
const titre = actupage.value.data.news_title[0].text;
const description = actupage.value.data.news_desc[0].text;
const date = actupage.value.data.news_date[0].text;
const image = actupage.value.data.news_img.url;
const imageALT = actupage.value.data.news_img.alt;
const image2 = actupage.value.data.news_img2.url;
const imageALT2 = actupage.value.data.news_img2.alt;
const image3 = actupage.value.data.news_img3.url;
const imageALT3 = actupage.value.data.news_img3.alt;
const image4 = actupage.value.data.news_img4.url;
const imageALT4 = actupage.value.data.news_img4.alt;
</script>

<template>
  <div class="actu">
    <h2 class="actu__title">Actualité</h2>
    <h3 class="actu__subtitle">{{ titre }}</h3>
    <p class="actu__date">{{ date }}</p>
    <p class="actu__description">{{ description }}</p>
    <div class="actu__div">
      <img :src="image" :alt="imageALT" class="actu__div--img" />
      <img :src="image2" :alt="imageALT2" class="actu__div--img" />
      <img :src="image3" :alt="imageALT3" class="actu__div--img" />
      <img :src="image4" :alt="imageALT4" class="actu__div--img" />
    </div>
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
    margin-bottom: rem(30);
  }

  &__description {
    color: $black;
    font-size: $body;
    font-family: $font-satoshi;
    margin-bottom: rem(50);
    margin-left: rem(30);
    margin-right: rem(30);
  }

  &__div {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: rem(20);
    margin-left: rem(30);
    margin-right: rem(30);
  }
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
      margin-bottom: rem(20);

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
      margin-left: rem(10);
      margin-right: rem(10);
    }

    &__div {
    gap: rem(10);
    margin-left: rem(10);
    margin-right: rem(10);
  }
  }
}
</style>