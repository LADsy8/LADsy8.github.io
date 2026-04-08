<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useGithub } from '../composables/useGithub';
import type { GitHubRepository } from '../types/github';

const route = useRoute();
const { repos: allRepos, loading, fetchUserRepos } = useGithub();

// Configuration des catégories pour un filtrage plus robuste
const categoriesConfig = {
  school: ['ecole', 'school', 'academic', 'université', 'college'],
  personal: ['personnel', 'personal', 'projet', 'expérimentation'],
  all: [],
};

/**
 * Filtre les repositories en fonction de la catégorie
 * Utilise une recherche insensible à la casse dans le nom et la description
 */
const filteredRepos = computed(() => {
  const category = route.params.category as string;
  const keywords = categoriesConfig[category as keyof typeof categoriesConfig] || [];

  if (category === 'all' || !keywords.length) {
    return allRepos.value;
  }

  return allRepos.value.filter((repo: GitHubRepository) => {
    const searchText = `${repo.name} ${repo.description || ''}`.toLowerCase();
    return keywords.some(keyword => searchText.includes(keyword.toLowerCase()));
  });
});

/**
 * Titre de la catégorie en fonction du paramètre de route
 */
const getCategoryTitle = computed(() => {
  const category = route.params.category;
  switch (category) {
    case 'school':
      return 'Projets Académiques';
    case 'personal':
      return 'Projets Personnels';
    default:
      return 'Tous mes Projets';
  }
});

onMounted(() => {
  fetchUserRepos();
});
</script>

<template>
  <div class="projects-container py-5">
    <div class="container">
      <div class="text-center mb-5 fade-in">
        <h2 class="section-title">{{ getCategoryTitle }}</h2>
        <p class="text-muted">Un aperçu de mon travail et de mes expérimentations</p>
        <div class="header-line"></div>
      </div>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
      </div>

      <div v-else-if="filteredRepos.length > 0" class="row g-4 fade-in">
        <div class="col-md-6 col-lg-4" v-for="repo in filteredRepos" :key="repo.id">
          <div class="repo-card h-100">
            <div class="card-content">
              <div class="repo-header">
                <span class="folder-icon">📂</span>
                <div class="repo-stats">
                  <span>⭐ {{ repo.stargazers_count }}</span>
                </div>
              </div>

              <h3 class="repo-name">{{ repo.name }}</h3>
              <p class="repo-description">
                {{
                  repo.description ||
                  'Exploration technique et développement de fonctionnalités innovantes.'
                }}
              </p>

              <div class="repo-footer">
                <div class="repo-lang" v-if="repo.language">
                  <span class="lang-dot"></span> {{ repo.language }}
                </div>
                <a :href="repo.html_url" target="_blank" class="github-link">
                  Voir le code <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-5">
        <div class="empty-state">
          <span class="empty-icon">🔍</span>
          <p>Aucun projet ne correspond à cette catégorie pour le moment.</p>
          <router-link to="/repos/all" class="btn btn-outline-primary">Voir tout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  min-height: 90vh;
  background-color: var(--bg-secondary);
  transition: background-color 0.3s ease;
}

.section-title {
  font-weight: 800;
  color: var(--text-primary);
  font-size: 2.5rem;
  transition: color 0.3s ease;
}

.header-line {
  width: 50px;
  height: 4px;
  background: var(--accent);
  margin: 15px auto;
  border-radius: 2px;
  transition: background 0.3s ease;
}

/* Style de la Carte */
.repo-card {
  background: var(--card-bg);
  border-radius: 20px;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, background 0.3s ease;
  position: relative;
  overflow: hidden;
}

.repo-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: var(--accent);
}

.card-content {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.repo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  border: none !important;
}

.folder-icon {
  font-size: 1.5rem;
  border:none;
}
.repo-stats {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 600;
  transition: color 0.3s ease;
  border:none;
}

.repo-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
  text-transform: capitalize;
  transition: color 0.3s ease;
}

.repo-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
}

/* Footer de la carte */
.repo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border: none;
}

.repo-lang {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
}

.lang-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  transition: background 0.3s ease;
}

.github-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s ease, gap 0.2s;
}

.github-link .arrow {
  transition: transform 0.2s;
  display: inline-block;
}

.github-link:hover .arrow {
  transform: translateX(4px);
}

/* Animations */
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.8rem;
  }
  .card-content {
    padding: 1.2rem;
  }
}
</style>
