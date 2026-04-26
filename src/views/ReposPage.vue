<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useGithub } from '../composables/useGithub';
import type { GitHubRepository } from '../types/github';

const route = useRoute();
const { repos: allRepos, loading, fetchUserRepos } = useGithub();

// État pour basculer entre les vues
const currentView = ref<'featured' | 'repos'>('featured');

// Projets Vedettes (Tes pages complètes)
const featuredProjects = ref([
  {
    id: 'air-metique',
    name: 'Air-Métique',
    description: 'Solution IoT complète de surveillance de la qualité de l\'air. Inclut une station physique (ESP32) et une application mobile de visualisation.',
    language: 'Vue.js / C++',
    link: '/project/air-metique',
    icon: '🚀'
  }
]);

const categoriesConfig = {
  school: ['ecole', 'school', 'academic', 'université', 'college'],
  personal: ['personnel', 'personal', 'projet', 'expérimentation'],
  all: [],
};

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

const getCategoryTitle = computed(() => {
  const category = route.params.category;
  switch (category) {
    case 'school': return 'Projets Académiques';
    case 'personal': return 'Projets Personnels';
    default: return 'Tous mes Projets';
  }
});

onMounted(() => {
  fetchUserRepos();
});
</script>

<template>
  <div class="projects-container py-5">
    <div class="container">
      <div class="text-center mb-4 fade-in">
        <h2 class="section-title">{{ getCategoryTitle }}</h2>
        <p class="text-muted">Découvrez mes réalisations majeures et mes dépôts de code</p>
        <div class="header-line"></div>
      </div>

      <div class="view-toggle mb-5 fade-in">
        <button 
          @click="currentView = 'featured'" 
          :class="['btn-toggle', { active: currentView === 'featured' }]"
        >
          ✨ Projets Vedettes
        </button>
        <button 
          @click="currentView = 'repos'" 
          :class="['btn-toggle', { active: currentView === 'repos' }]"
        >
          <i class="fab fa-github"></i> Dépôts GitHub
        </button>
      </div>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
      </div>

      <div v-else class="fade-in">
        
        <div v-if="currentView === 'featured'" class="row g-4">
          <div class="col-md-6" v-for="project in featuredProjects" :key="project.id">
            <div class="repo-card featured-card h-100">
              <div class="card-content">
                <div class="repo-header">
                  <span class="folder-icon">{{ project.icon }}</span>
                  <span class="badge-featured">PROJET MAJEUR</span>
                </div>
                <h3 class="repo-name">{{ project.name }}</h3>
                <p class="repo-description">{{ project.description }}</p>
                <div class="repo-footer">
                  <div class="repo-lang">
                    <span class="lang-dot"></span> {{ project.language }}
                  </div>
                  <router-link :to="project.link" class="github-link">
                    Voir les détails <span class="arrow">→</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="filteredRepos.length > 0" class="row g-4">
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
                  {{ repo.description || 'Exploration technique et développement de fonctionnalités.' }}
                </p>
                <div class="repo-footer">
                  <div class="repo-lang" v-if="repo.language">
                    <span class="lang-dot"></span> {{ repo.language }}
                  </div>
                  <a :href="repo.html_url" target="_blank" class="github-link">
                    GitHub <span class="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-5">
          <div class="empty-state">
            <span class="empty-icon">🔍</span>
            <p>Aucun projet trouvé ici.</p>
            <router-link to="/repos/all" class="btn btn-outline-primary">Voir tout</router-link>
          </div>
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
}

.header-line {
  width: 50px;
  height: 4px;
  background: var(--accent);
  margin: 15px auto;
  border-radius: 2px;
}

/* Boutons Toggle */
.view-toggle {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn-toggle {
  padding: 10px 25px;
  border-radius: 50px;
  border: 2px solid var(--accent);
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-toggle.active {
  background: var(--accent);
  color: white;
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
}

/* Cartes - AUCUNE BORDURE */
.repo-card {
  background: var(--card-bg);
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none !important;
  outline: none !important;
  position: relative;
  overflow: hidden;
}

.repo-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: none !important;
}

/* On enlève aussi la bordure spéciale des projets vedettes */
.featured-card {
  border: none !important;
  background: var(--card-bg);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.badge-featured {
  background: var(--accent);
  color: white;
  font-size: 0.7rem;
  padding: 4px 10px;
  border-radius: 50px;
  font-weight: 700;
}

.card-content {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.repo-header, .repo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none !important;
}

.repo-header { margin-bottom: 1.2rem; }

.repo-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
}

.repo-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
}

.github-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>