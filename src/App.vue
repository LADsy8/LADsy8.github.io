<script setup lang="ts">
import Header from './components/ui/Header.vue';
import Footer from './components/ui/Footer.vue';
</script>

<template>
  <div class="app-wrapper">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
