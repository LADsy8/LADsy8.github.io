<script setup lang="ts">
import { onMounted } from 'vue';
import { useGithub } from '../composables/useGithub';

const { user: githubProfile, loading, error, fetchUserProfile } = useGithub();

onMounted(() => {
  fetchUserProfile();
});
</script>

<template>

  <h2>Accueil</h2>
  <section>
    <p>
      Développeur junior (mobile, web, jeux vidéo). DEC en techniques de l’informatique obtenu en
      mai 2026 (Cégep de Sainte-Foy).
    </p>

    <p>
      Je conçois des applications web et des projets logiciels du front-end au back-end. Co-créateur
      d’<router-link to="/project/air-metique">Air-Métique</router-link>. Recherche un emploi ou un
      mandat au Québec (junior full stack, web ou mobile).
    </p>

    <p v-if="loading" class="loading">Chargement du profil GitHub…</p>
    <p v-else-if="error">
      Profil GitHub indisponible.
      <a href="https://github.com/ladsy8" rel="noopener noreferrer">Voir github.com/ladsy8</a>
    </p>
    <p v-else-if="githubProfile">
      <span v-if="githubProfile.bio">{{ githubProfile.bio }} · </span>
      {{ githubProfile.public_repos }} dépôts publics · {{ githubProfile.followers }} abonnés
      GitHub.
    </p>

    <h2>Liens utiles</h2>
    <ul>
      <li>
        <router-link to="/project/air-metique">Air-Métique</router-link> — projet vedette (IoT,
        synthèse)
      </li>
      <li>
        <router-link to="/repos/all?view=featured">Autres projets vedettes</router-link>
      </li>
      <li>
        <router-link to="/repos/all?view=repos">Dépôts GitHub</router-link>
      </li>
      <li><router-link to="/about">Parcours et formation</router-link></li>
      <li><router-link to="/skills">Compétences</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </section>
</template>
