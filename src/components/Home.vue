<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">Bienvenue sur mon Portfolio</h1>

    <!-- Affichage de l'avatar -->
    <div v-if="githubProfile" class="text-center">
      <img :src="githubProfile.avatar_url" alt="Avatar" class="rounded-circle mb-3" style="width: 150px; height: 150px;">
      <h2>{{ githubProfile.name }}</h2>
      <p>{{ githubProfile.bio }}</p>
    </div>

    <div class="text-center mt-5">
      <h3>Explorez mes projets</h3>
      <div class="row justify-content-center">
        <div class="col-md-3 mb-4">
          <router-link to="/repos/school" class="btn btn-primary w-100">Repos École</router-link>
        </div>
        <div class="col-md-3 mb-4">
          <router-link to="/repos/personal" class="btn btn-success w-100">Repos Personnels</router-link>
        </div>
        <div class="col-md-3 mb-4">
          <router-link to="/repos/all" class="btn btn-info w-100">Tous mes Repos</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

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


