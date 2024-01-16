<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isFooterHidden = ref(route.name === 'contact' || (route.name.startsWith('en') && route.name !== 'en/'));
const isHeaderVisible = ref(!route.fullPath.startsWith('/contact') && !route.fullPath.startsWith('/en/contact'));

watchEffect(() => {
  isFooterHidden.value = route.name === 'contact' || (route.name.startsWith('en') && route.name !== 'en/');
  isHeaderVisible.value = !route.fullPath.startsWith('/contact') && !route.fullPath.startsWith('/en/contact');
  });
</script>

<template>
  <div>
    <Header v-if="isHeaderVisible" />
    <NuxtPage />
    <Footer v-if="!isFooterHidden" />
  </div>
</template>