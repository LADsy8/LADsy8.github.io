
<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
    <Header />  <!-- Un composant commun -->
    <div class="container">
      <router-view />  <!-- Composant correspondant à la route -->
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>