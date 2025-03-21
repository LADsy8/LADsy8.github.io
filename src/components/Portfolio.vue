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
  <section>
    <h2>Mes Projects Github</h2>
    <div v-for="project in projects" :key="project.id">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <a :href="project.html_url" target="_blank">Voir sur Github</a>
    </div>
  </section>
</template>

<style scoped>
</style>