<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useGithub } from '../composables/useGithub';

const { user: githubProfile, fetchUserProfile } = useGithub();

onMounted(() => {
  fetchUserProfile();
});

const motifs = computed(() => {

  const basePattern = "   __|__|";
  const positions = [5, 2, 8];
  
  const totalLignes = 60;   
  const repetitionX = 35;   
  
  let lignes: string[] = [];

  for (let i = 0; i < totalLignes; i++) {

    const indexDepart = positions[i % positions.length];
  
    const debutLigne = basePattern.slice(indexDepart);
  
    const suiteLigne = basePattern.repeat(repetitionX);
    
    lignes.push(debutLigne + suiteLigne);
  }
  
  return lignes;
});
</script>

<template>
 <div class="portfolio-wrapper position-relative overflow-hidden" style="min-height: 100vh;">
  
  <div class="brick-background position-absolute top-0 start-0 w-100 h-100 z-0 m-0 p-0 text-secondary pe-none " aria-hidden="true">
      <div 
        v-for="(ligne, index) in motifs" 
        :key="index" 
        class="pattern-line"
      >
        {{ ligne }}
      </div>
    </div>
 
    <div class="container py-5 position-relative z-1">
      <header class="text-center mb-5 fade-in">
        <h1 class="display-4 fw-bold gradient-text"></h1>
        <div class="underline mx-auto"></div>
      </header>

      <div v-if="githubProfile" class="">
        <div class="profile-content">
          <div class="avatar-container">
            <img src="../assets/1776786464860.jpg" alt="Avatar" class="profile-avatar" />
            <div class="status-badge"></div>
          </div>
          <h2 class="mt-3 fw-bold">{{ 'Arthur Dubé'}}</h2>
          <p class="text-muted bio-text">
            {{ githubProfile.bio || 'Développeur Full Stack Junior, Un des créateurs de Air-Métique.' }}
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
* {
  font-family:monospace;
}
.brick-background {
  font-size: 10px;
  letter-spacing: 0px;
  word-spacing: 0px;
  opacity: 0.33;
}

.pattern-line {
  margin: 0;
  padding: 0;
  white-space: pre;
  display: block;
}
</style>