<script setup lang="ts">
import { ref, onMounted } from 'vue';

const githubProfile = ref<any>(null);

const fetchGithubProfile = async () => {
  try {
    const response = await fetch('https://api.github.com/users/ladsy8');
    const data = await response.json();
    githubProfile.value = data;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil GitHub:', error);
  }
};

onMounted(() => {
  fetchGithubProfile();
});
</script>




<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">Bienvenue sur mon Portfolio</h1>

    <!-- Avatar et Profil GitHub -->
    <div v-if="githubProfile" class="text-center mb-5">
      <img :src="githubProfile.avatar_url" alt="Avatar" class="rounded-circle mb-3" style="width: 150px; height: 150px;">
      <h2>{{ githubProfile.name }}</h2>
      <p>{{ githubProfile.bio }}</p>
    </div>

    <!-- Boutons pour explorer les projets -->
    <div class="text-center mt-5">
      <h3>Explorez mes projets</h3>
      <div class="row justify-content-center">
        <div class="col-md-4 mb-4" v-for="category in ['school', 'personal', 'all']" :key="category">
          <router-link :to="`/repos/${category}`" class="btn btn-primary w-100">{{ category === 'school' ? 'Repos École' : category === 'personal' ? 'Repos Personnels' : 'Tous mes Repos' }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (max-width: 767px) {
  .text-center {
    padding-left: 15px;
    padding-right: 15px;
  }

  .btn {
    font-size: 0.9rem; /* Petite taille de bouton sur mobile */
  }
}
</style>