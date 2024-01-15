<script setup>

const { client } = usePrismic();
const { data: questions } = await useAsyncData('faq', () => client.getAllByType('faq'));

const isOpen = ref(false);

const toggleAnswer = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div class="faq">
    <h2 class="faq__title">FAQ</h2>
    <p class="faq__paragraph">Still wondering ? We've got you covered !</p>
    <MyEllipse size="regular" color="primary" class="faq__ellipse" />
    <div class="faq__arrow">
      <MyArrow />
      <p class="faq__arrow--paragraph">Answers here.</p>
    </div>
    <MyEllipse size="giant" color="primary2" class="faq__ellipse2" />
  </div>
  <div>
    <div v-for="question in questions" :key="question.faq_id">
      <div v-if="question.data.faq_answer && question.data.faq_answer[0].text.trim().length > 0" class="faq-container">
        <div class="content">
          <div class="content__question" @click="toggleAnswer">
            <PrismicRichText :field="question.data.faq_question" />
            <MyChevron />
          </div>
          <div class="content__answer" v-if="isOpen">
            <PrismicRichText :field="question.data.faq_answer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.faq-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content {

  border: rem(3) solid $black;
  border-radius: rem(18);
  width: rem(1042);
  padding: rem(5);
  margin-bottom: rem(20);

  &__question {
    margin-left: rem(30);
    color: $secondary-color;
    font-size: $body;
    font-family: $font-satoshi-bold;
    display: flex;
    align-items: center;
  }

  &__answer {
    margin-left: rem(30);
    color: $black;
    font-size: $body;
    font-family: $font-satoshi-bold;
  }
}

.faq {
  margin-left: rem(70);
  position: relative;

  &__ellipse {
    position: absolute;
    top: rem(32);
    left: rem(-176);
  }

  &__ellipse2 {
    position: absolute;
    bottom: rem(-256);
    right: rem(-400);

  }



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
</style>
