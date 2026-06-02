<script setup lang="ts">
import { onMounted } from 'vue';
import { useGithub } from '../composables/useGithub';

const { user: githubProfile, fetchUserProfile } = useGithub();

onMounted(() => {
  fetchUserProfile();
});
</script>

<template>
  <section>
    <h2>Accueil</h2>

    <p v-if="githubProfile">
      <img src="../assets/1776786464860.jpg" alt="Arthur Dubé" width="120" height="120" />
    </p>

    <p>
      <strong>Arthur Dubé</strong> —
      {{
        githubProfile?.bio ||
        'Développeur Full Stack Junior, un des créateurs d’Air-Métique.'
      }}
    </p>

    <p v-if="githubProfile">
      {{ githubProfile.public_repos }} dépôts publics · {{ githubProfile.followers }} abonnés
      GitHub.
    </p>
    <p v-else class="loading">Chargement du profil GitHub…</p>

    <h3>Explorer</h3>
    <ul>
      <li>
        <router-link to="/repos/all?view=featured">Projets vedettes</router-link> — réalisations
        majeures
      </li>
      <li>
        <router-link to="/repos/all?view=repos">Dépôts GitHub</router-link> — code et explorations
      </li>
      <li><router-link to="/about">À propos</router-link> — parcours et bio</li>
      <li><router-link to="/skills">Compétences</router-link> — langages et outils</li>
      <li><router-link to="/contact">Contact</router-link> — formulaire et coordonnées</li>
    </ul>
  </section>
</template>
