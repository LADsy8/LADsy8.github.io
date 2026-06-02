<script setup lang="ts">
import Header from './components/ui/Header.vue';
import Footer from './components/ui/Footer.vue';
</script>

<template>
  <div class="site-layout">
    <Header />
    <div class="site-content">
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>
