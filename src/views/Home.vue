<script setup lang="ts">
import { onMounted } from 'vue';
import { useGithub } from '../composables/useGithub';

const { user: githubProfile, loading, error, fetchUserProfile } = useGithub();

onMounted(() => {
  fetchUserProfile();
});
</script>

<template>
  <article class="home-card">
    <header class="home-header">
      <h2>Accueil</h2>
      <p class="subtitle">
        Développeur junior (mobile, web, jeux vidéo). DEC en techniques de l’informatique obtenu en
        mai 2026 (Cégep de Sainte-Foy).
      </p>
    </header>

    <section class="home-section">
      <p class="intro-text">
        Je conçois des applications web et des projets logiciels du front-end au back-end.
        Co-créateur d’<router-link to="/project/air-metique">Air-Métique</router-link>. Recherche un
        emploi ou un mandat au Québec (junior full stack, web ou mobile). Je crée aussi un jeu dans
        mes temps libres et j'aime découvrir des jeux méconnus et indépendants.
      </p>

      <div class="github-status-box">
        <p v-if="loading" class="loading">Chargement du profil GitHub…</p>
        <p v-else-if="error" class="github-error">
          Profil GitHub indisponible.
          <a href="https://github.com/ladsy8" target="_blank" rel="noopener noreferrer"
            >Voir github.com/ladsy8</a
          >
        </p>
        <div v-else-if="githubProfile" class="github-data">
          <span v-if="githubProfile.bio" class="github-bio">{{ githubProfile.bio }}</span>
          <div class="github-stats">
            <span class="stat-tag">
              <strong>{{ githubProfile.public_repos }}</strong> dépôts publics
            </span>
            <span class="stat-tag">
              <strong>{{ githubProfile.followers }}</strong> abonnés GitHub
            </span>
            <a
              href="https://github.com/devlaner/devlane"
              target="_blank"
              rel="noopener noreferrer"
              class="stat-tag contributor-tag"
            >
              <span class="badge-label">Contributeur</span>
              <strong>Devlaner</strong>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="home-section">
      <h3>Liens utiles</h3>
      <ul class="nav-links-grid">
        <li>
          <router-link to="/project/air-metique" class="nav-card">
            <span class="nav-title">Air-Métique</span>
            <span class="nav-desc">Projet vedette (IoT, synthèse)</span>
          </router-link>
        </li>
        <li>
          <router-link to="/repos/all?view=featured" class="nav-card">
            <span class="nav-title">Projets vedettes</span>
            <span class="nav-desc">Sélection de réalisations</span>
          </router-link>
        </li>
        <li>
          <router-link to="/repos/all?view=repos" class="nav-card">
            <span class="nav-title">Dépôts GitHub</span>
            <span class="nav-desc">Ensemble des repositories</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-card">
            <span class="nav-title">Parcours & Formation</span>
            <span class="nav-desc">À propos de mon profil</span>
          </router-link>
        </li>
        <li>
          <router-link to="/skills" class="nav-card">
            <span class="nav-title">Compétences</span>
            <span class="nav-desc">Technologies et outils</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-card">
            <span class="nav-title">Contact</span>
            <span class="nav-desc">Me joindre directement</span>
          </router-link>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.home-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.home-header h2 {
  margin: 0;
}

.subtitle {
  margin: 0.5rem 0 0;
  color: var(--text-muted);
  font-size: 1.1rem;
}

.home-section {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

.home-section h3 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 1.25rem;
}

/* GitHub Status Box */
.github-status-box {
  background-color: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1rem 1.25rem;
}

.github-error {
  margin: 0;
  font-size: 0.9rem;
}

.github-data {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.github-bio {
  font-style: italic;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.github-stats {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.stat-tag {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.25rem 0.625rem;
  font-size: 0.85rem;
  color: var(--text-main);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  text-decoration: none;
}

.contributor-tag {
  background-color: #eff6ff;
  border-color: #bfdbfe;
  color: var(--primary);
  transition: background-color 0.15s ease;
}

.contributor-tag:hover {
  background-color: #dbeafe;
}

.badge-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.8;
}

/* Cartes de navigation */
.nav-links-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.nav-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition:
    border-color 0.15s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

.nav-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  text-decoration: none;
}

.nav-title {
  font-weight: 600;
  color: var(--primary);
  font-size: 1rem;
}

.nav-desc {
  font-weight: 400;
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 640px) {
  .nav-links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
