<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div class="p-0 m-0 w-100">
    <Header />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<style>
html, body, #app {
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
