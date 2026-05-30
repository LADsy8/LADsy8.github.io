<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGithub } from '../composables/useGithub';
import type { GitHubRepository } from '../types/github';
import projectsData from '../assets/data/projects.json';

const route = useRoute();
const router = useRouter();
const { repos: allRepos, loading, fetchUserRepos } = useGithub();

// État pour basculer entre les vues
const currentView = ref<'featured' | 'repos'>((route.query.view as any) || 'featured');

// Projets Vedettes (Tes pages complètes)
const featuredProjects = computed(() => {
  return projectsData.projects.map(project => ({
    id: project.id,
    name: project.title,
    description: project.subtitle, // On utilise le sous-titre pour la version carte
    language: project.technologies.map(t => t.name).join(' / '), // Concatène les technos
    link: `/project/${project.id}`,
    icon: project.id === 'air-metique' ? '🚀' : '📂' // Icone selon l'ID
  }));
});

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

const setView = (view: 'featured' | 'repos') => {
  currentView.value = view;
  router.push({ 
    query: { ...route.query, view: view } 
  });
};

watch(() => route.query.view, (newView) => {
  if (newView) {
    currentView.value = newView as 'featured' | 'repos';
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
            @click="setView('featured')" 
            :class="['btn-toggle', { active: currentView === 'featured' }]"
          >
            Projets MAJEUR
        </button>
        <button 
            @click="setView('repos')" 
            :class="['btn-toggle', { active: currentView === 'repos' }]"
          >
             Dépôts GitHub
        </button>
      </div>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
      </div>

      <div v-else>
        
        <div v-if="currentView === 'featured'" class="row g-4">
          <div class="col-md-6" v-for="project in featuredProjects" :key="project.id">
            <div class="repo-card featured-card h-100">
              <div class="card-content">
                <div class="repo-header">
                  
                  <span >PROJET MAJEUR</span>
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
                  <div class="repo-stats">
                    <span>{{ repo.stargazers_count }}</span>
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
            <p>Aucun projet trouvé ici.</p>
            <router-link to="/repos/all" class="btn btn-outline-primary">Voir tout</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>