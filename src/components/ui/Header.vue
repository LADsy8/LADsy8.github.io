<template>
  <nav class="navbar navbar-expand-lg custom-navbar sticky-top">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">
        <span class="brand-dot"></span> Arthur Dubé
      </router-link>

      <button
        class="navbar-toggler"
        type="button"

        aria-label="Toggle navigation"
      >
        <span class="toggler-icon"></span>
      </button>

      <div 
        class="collapse navbar-collapse" 
         
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item" >
            <router-link to="/" class="nav-link" active-class="active-link"> Accueil </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active-link">
              À Propos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills" class="nav-link" active-class="active-link">
              Compétences
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/repos/all" class="nav-link" active-class="active-link">
              Projets
            </router-link>
          </li>
          <li class="nav-item ms-lg-3">
            <router-link to="/contact" class="btn-contact"> Me contacter </router-link>
          </li>
          <li class="nav-item ms-2">
            <button
              class="theme-toggle"
          
      >
              <i ></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
