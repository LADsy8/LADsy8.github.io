<!-- App.vue -->
<script setup lang="ts">
import Header from './components/ui/Header.vue';
import Footer from './components/ui/Footer.vue';
</script>

<template>
  <div id="app">
    <!-- Fond animé aurora -->
    <div class="aurora-bg">
      <div class="aurora-blob blob-primary"></div>
      <div class="aurora-blob blob-secondary"></div>
      <div class="aurora-blob blob-accent"></div>
    </div>

    <!-- Header pleine largeur tout en haut -->
    <Header />

    <!-- Layout principal centré -->
    <div class="site-layout">
      <!-- Retire <aside class="site-sidebar"> si tu gardes le Header du haut -->
      <main class="site-content">
        <router-view />
      </main>
    </div>

    <Footer />
  </div>
</template>