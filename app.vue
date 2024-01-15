<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div>
    <Header v-if="route.name !== 'contact'"/>
    <NuxtPage />
    <Footer />
  </div>
</template>

<style lang="scss">
@import './scss/main.scss';
</style>
