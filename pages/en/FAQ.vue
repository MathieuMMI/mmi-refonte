<script setup>

const { client } = usePrismic();
const { data: questions } = await useAsyncData('faq', () => client.getAllByType('faq'));

import { ref } from 'vue';

const isOpen = ref([]);

const toggleAnswer = (index) => {
  isOpen.value[index] = !isOpen.value[index];
};
</script>
<template>
  <div class="template-faq">
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
    <div v-for="(question, index) in Object.values(questions)" :key="index">
      <div v-if="question.data.faq_answer && question.data.faq_answer[0].text.trim().length > 0" class="faq-container">
        <div class="content">
          <div class="content__question" @click="() => toggleAnswer(index)">
            <PrismicRichText :field="question.data.faqen_question" />
            <MyChevron class="content__question--chevron" />
          </div>
          <div class="content__answer" v-if="isOpen[index]">
            <PrismicRichText :field="question.data.faqen_answer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.template-faq {
  margin-bottom: rem(150);
}

.faq-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content {

  border: rem(1) solid $black;
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
    justify-items: space-between;
    align-items: center;

    &--chevron {
      width: rem(50);
    }
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


@media screen and (max-width: 767px) {
  .template-faq {
    margin-bottom: rem(70);
  }

  .faq-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content {
    border: rem(2) solid $black;
    border-radius: rem(18);
    width: 80%;
    height: auto;
    padding: rem(5);
    margin-bottom: rem(20);
    overflow: hidden;

    &__question {
      margin-left: rem(0);
      color: $secondary-color;
      font-size: $mobile-body;
      font-family: $font-satoshi-bold;
      display: flex;
      align-items: center;
    }

    &__answer {
      margin-left: rem(0);
      color: $black;
      font-size: $mobile-body;
      font-family: $font-satoshi-bold;
    }
  }

  .faq {
    margin-left: rem(0);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &__ellipse {
      position: absolute;
      top: rem(32);
      left: rem(-0);
      visibility: hidden;
    }

    &__ellipse2 {
      position: absolute;
      bottom: rem(-256);
      right: rem(-400);
      visibility: hidden;
    }

    &__title {
      font-size: $mobile-h1;
      font-family: $font-satoshi-bold;
    }

    &__paragraph {
      font-family: $font-satoshi-bold;
      font-size: $mobile-body;
      color: #8B8BDC;
      width: rem(272);
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

}
</style>