<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isComponentHidden = ref(route.name === 'contact' || (route.name.startsWith('en') && route.name !== 'en/'));

// Utiliser un watcher pour mettre à jour isComponentHidden en fonction des changements de route
watchEffect(() => {
  isComponentHidden.value = route.name === 'contact' || (route.name.startsWith('en') && route.name !== 'en/');
});
</script>

<template>
  <div>
    <Header v-if="route.name !== 'contact'"/>
    <NuxtPage />
    <Footer v-if="!isComponentHidden" />
  </div>
</template>