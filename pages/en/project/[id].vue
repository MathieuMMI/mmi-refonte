<script setup>
const router = useRoute();
const IdProjet = ref('');
const { client } = usePrismic();
IdProjet.value = router.params.id || '';

const { data: projectpage } = await useAsyncData('project', () => client.getByID(IdProjet.value));
// variables pour le contenu
const titre = projectpage.value.data.project_title[0].text;
const description = projectpage.value.data.projecten_desc[0].text;
const annee = projectpage.value.data.projecten_annee[0].text;
const image = projectpage.value.data.project_img.url;
const imageALT = projectpage.value.data.project_img.alt;
</script>

<template>
  <div class="projet">
    <h2 class="projet__title">Projet</h2>
    <h3 class="projet__subtitle">{{ titre }}</h3>
    <p class="projet__date">{{ annee }}</p>
    <!-- <a :href="link.url">Accéder au projet</a> -->
    <p class="projet__description">{{ description }}</p>
    <img :src="image" :alt="imageALT" class="projet__img" />
  </div>
</template>

<style lang="scss" scoped>
.projet {
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
    margin-bottom: rem(40);
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
    margin-bottom: rem(30);
    margin-left: rem(20);
    margin-right: rem(20);
  }

  &__img {}
}

@media screen and (max-width: 767px) {
  .projet {
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
      margin-left: rem(20);
    margin-right: rem(20);
    margin-bottom: rem(30);
    }

    &__img {}
  }
}
</style>