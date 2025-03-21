<script setup lang="ts">
  </script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Mon Portfolio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto"> <!-- ms-auto to align items to the right -->
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
  @media (max-width: 767px) {
    .navbar-nav {
      text-align: center; /* Center align navbar items on small screens */
    }
  }
  </style>
  
  