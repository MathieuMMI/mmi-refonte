<script setup>
const { client } = usePrismic()
const { data: questions } = await useAsyncData('faq', () => client.getAllByType('faq'));
</script>

<template>
  <RouterLink class="home" to="/">Accueil</RouterLink>
  <p></p>
  <RouterLink to="/prof">Professeurs</RouterLink>
  <p></p>
  <RouterLink to="/Contact">Contact</RouterLink>
  <div>
    <div v-for="question in questions" :key="question.faq_id">
      <div v-if="question.data.faq_answer && question.data.faq_answer[0].text.trim().length > 0">
        <div class="question">
          <PrismicRichText :field="question.data.faq_question" />
        </div>
        <div class="answer">
          <PrismicRichText :field="question.data.faq_answer" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .question {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .answer {
    margin-bottom: 20px;
  }
</style>
