<script setup lang="ts">
import { ref, onMounted } from 'vue';

const projects = ref<any[]>([]);

const fetchGithubProjects = async () => {
  try {
    const response = await fetch('https://api.github.com/users/ladsy8/repos');
    const data = await response.json();
    projects.value = data;
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
  }
};

onMounted(() => {
  fetchGithubProjects();
});
</script>

<template>
  <section class="container py-5">
    <h2 class="text-center mb-4">Mes Projects Github</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="project in projects" :key="project.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text" v-if="project.description">{{ project.description }}</p>
            <p class="card-text" v-else>Aucune description disponible</p>
            <a :href="project.html_url" class="btn btn-primary" target="_blank">Voir sur Github</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>