<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import projectsData from '../assets/data/projects.json';

const route = useRoute();

const project = computed(() => projectsData.projects.find(p => p.id === route.params.id));
</script>

<template>
  <article v-if="project">
    <p><router-link to="/repos/all">← Projets</router-link></p>

    <h2>{{ project.title }}</h2>
    <p><em>{{ project.subtitle }}</em></p>
    <p>
      <strong>Contexte :</strong> {{ project.context }} · <strong>Client :</strong>
      {{ project.client }} · <strong>Durée :</strong> {{ project.duration }}
    </p>

    <h3>Description</h3>
    <p>{{ project.description }}</p>

    <h3>Fonctionnalités</h3>
    <ul>
      <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
    </ul>

    <h3>Matériel</h3>
    <ul>
      <li v-for="item in project.hardware" :key="item">{{ item }}</li>
    </ul>

    <h3>Technologies</h3>
    <p>{{ project.technologies.map(t => t.name).join(', ') }}.</p>

    <h3>Équipe</h3>
    <ul>
      <li v-for="member in project.team" :key="member">{{ member }}</li>
    </ul>

    <p v-if="project.links?.gitlab">
      <a :href="project.links.gitlab" rel="noopener noreferrer">Code sur GitHub/GitLab</a>
    </p>
  </article>

  <article v-else>
    <h2>Projet introuvable</h2>
    <p><router-link to="/repos/all">Retour aux projets</router-link></p>
  </article>
</template>
