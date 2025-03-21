<script setup lang="ts">
  </script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Mon Portfolio</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/repos/all" class="nav-link">Repos</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <style scoped>
  </style>
  