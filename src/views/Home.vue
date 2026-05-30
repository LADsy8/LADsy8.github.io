<script setup lang="ts">
import { onMounted } from 'vue';
import { useGithub } from '../composables/useGithub';

const { user: githubProfile, fetchUserProfile } = useGithub();

onMounted(() => {
  fetchUserProfile();
});
</script>

<template>
  <div class="portfolio-wrapper">
    <div class="container py-5">
      <header class="text-center mb-5 fade-in">
        <h1 class="display-4 fw-bold gradient-text">Bienvenue sur mon portfolio professionnel</h1>
        <div class="underline mx-auto"></div>
      </header>

      <div
        v-if="githubProfile"
        class="profile-card mx-auto p-4 mb-5 shadow-lg"

      >
        <div class="profile-content">
          <div class="avatar-container">
            <img src="../assets/1776786464860.jpg" alt="Avatar" class="profile-avatar" />
            <div class="status-badge"></div>
          </div>
          <h2 class="mt-3 fw-bold">{{ 'Arthur Dubé'}}</h2>
          <p class="text-muted bio-text">
            {{
              githubProfile.bio ||
              'Développeur Full Stack Junior, Un des créateurs de Air-Métique.'
            }}
          </p>

          <div class="stats d-flex justify-content-center gap-4 mt-3">
            <div class="stat-item">
              <span class="d-block fw-bold">{{ githubProfile.public_repos }}</span>
              <small>Projets</small>
            </div>
            <div class="stat-item">
              <span class="d-block fw-bold">{{ githubProfile.followers }}</span>
              <small>Followers</small>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
  <h3 class="mb-4 section-title">Explorez mon univers</h3>
  <div class="row justify-content-center g-4">
    <div class="col-md-5 col-sm-6">
      <router-link to="/repos/all?view=featured" class="category-card featured-btn">
        <span class="label">Projets Vedettes</span>
        <small class="text-muted-hover">Mes réalisations majeures</small>
      </router-link>
    </div>

    <div class="col-md-5 col-sm-6">
      <router-link to="/repos/all?view=repos" class="category-card">
        
        <span class="label">Dépôts GitHub</span>
        <small class="text-muted-hover">Explorations et code brut</small>
      </router-link>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<style scoped>

</style>
