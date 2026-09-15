<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import projectsData from '../assets/data/projects.json';

const route = useRoute();

const project = computed(() => projectsData.projects.find(p => p.id === route.params.id));
</script>

<template>
  <article v-if="project" class="project-detail-card">
    <div class="back-link-wrapper">
      <router-link to="/repos/all" class="back-link">← Retour aux projets</router-link>
    </div>

    <header class="project-header">
      <h2>{{ project.title }}</h2>
      <p class="subtitle">{{ project.subtitle }}</p>
    </header>

    <section class="project-section">
      <div class="meta-grid">
        <div class="meta-item">
          <span class="meta-label">Contexte</span>
          <span class="meta-value">{{ project.context }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Client</span>
          <span class="meta-value">{{ project.client }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Durée</span>
          <span class="meta-value">{{ project.duration }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Rôle</span>
          <span class="meta-value">Team Lead / IoT</span>
        </div>
      </div>
    </section>

    <section class="project-section">
      <h3>À propos du projet</h3>
      <p class="project-description">{{ project.description }}</p>
    </section>

    <section class="project-section">
      <h3>Fonctionnalités clés</h3>
      <ul class="styled-list">
        <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
      </ul>
    </section>

    <section v-if="project.hardware && project.hardware.length" class="project-section">
      <h3>Architecture et matériel</h3>
      <ul class="styled-list">
        <li v-for="item in project.hardware" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="project-section">
      <h3>Stack technologique</h3>
      <div class="tech-tags">
        <span v-for="t in project.technologies" :key="t.name" class="tech-tag">
          {{ t.name }}
        </span>
      </div>
    </section>

    <section v-if="project.team && project.team.length" class="project-section">
      <h3>Équipe</h3>
      <ul class="team-list">
        <li v-for="member in project.team" :key="member" class="team-member">
          {{ member }}
        </li>
      </ul>
    </section>

    <footer v-if="project.links?.gitlab" class="project-footer">
      <a :href="project.links.gitlab" target="_blank" rel="noopener noreferrer" class="gitlab-btn">
        Voir le code sur GitLab
      </a>
    </footer>
  </article>

  <article v-else class="project-detail-card not-found-card">
    <h2>Projet introuvable</h2>
    <p class="subtitle">Le projet demandé n'existe pas ou a été déplacé.</p>
    <router-link to="/repos/all" class="back-link">Retour aux projets</router-link>
  </article>
</template>

<style scoped>
.project-detail-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.back-link-wrapper {
  margin-bottom: -1rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.15s ease;
}

.back-link:hover {
  color: var(--primary);
}

.project-header h2 {
  margin: 0;
}

.subtitle {
  margin: 0.35rem 0 0;
  color: var(--text-muted);
  font-size: 1.1rem;
  font-style: italic;
}

.project-section {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

.project-section h3 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* Grille des métadonnées */
.meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  background-color: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.25rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.meta-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: var(--text-muted);
}

.meta-value {
  font-weight: 500;
  color: var(--text-main);
}

/* Listes puces personnalisées */
.styled-list {
  margin: 0;
  padding-left: 1.25rem;
}

.styled-list li {
  margin-bottom: 0.5rem;
}

.styled-list li:last-child {
  margin-bottom: 0;
}

/* Badges de technologies */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-main);
}

/* Équipe */
.team-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.team-member {
  background-color: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.35rem 0.75rem;
  font-size: 0.875rem;
  color: var(--text-main);
}

/* Footer / Bouton GitLab */
.project-footer {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

.gitlab-btn {
  display: inline-block;
  padding: 0.625rem 1.25rem;
  background-color: var(--primary);
  color: #ffffff;
  border-radius: var(--radius-sm);
  font-weight: 500;
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition:
    background-color 0.15s ease,
    transform 0.1s ease;
}

.gitlab-btn:hover {
  background-color: var(--primary-hover);
  text-decoration: none;
}

.gitlab-btn:active {
  transform: translateY(1px);
}

.not-found-card {
  align-items: flex-start;
}

@media (max-width: 640px) {
  .meta-grid {
    grid-template-columns: 1fr;
  }
}
</style>
