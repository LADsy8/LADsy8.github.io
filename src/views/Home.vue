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
    <h2>Portfolio</h2>
    <p>
      <strong>Arthur Dubé</strong> — développeur full stack junior, co-créateur d’Air-Métique.
    </p>
    <p v-if="githubProfile">
      {{ githubProfile.bio || 'Projets web, IoT et logiciel.' }}
      ({{ githubProfile.public_repos }} dépôts publics sur GitHub.)
    </p>
    <p v-else>Chargement du profil GitHub…</p>

    <h3>Explorer</h3>
    <ul>
      <li>
        <router-link to="/repos/all?view=featured">Projets vedettes</router-link> — réalisations
        majeures
      </li>
      <li>
        <router-link to="/repos/all?view=repos">Dépôts GitHub</router-link> — code et explorations
      </li>
      <li><router-link to="/about">À propos</router-link></li>
      <li><router-link to="/contact">Me contacter</router-link></li>
    </ul>
  </section>
</template>
