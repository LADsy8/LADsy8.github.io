
<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
    <Header />  <!-- Un composant commun, peut-être un en-tête -->
    <router-view />  <!-- Ici s'affichera le composant correspondant à la route -->
  </div>
</template>

<style scoped>
</style>