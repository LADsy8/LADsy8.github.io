<script setup lang="ts">
import { onMounted, computed, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGithub } from '../composables/useGithub';
import type { GitHubRepository } from '../types/github';
import projectsData from '../assets/data/projects.json';

const route = useRoute();
const router = useRouter();
const { repos: allRepos, loading, fetchUserRepos } = useGithub();

const currentView = ref<'featured' | 'repos'>(
  (route.query.view as 'featured' | 'repos') || 'featured'
);

const featuredProjects = computed(() =>
  projectsData.projects.map(project => ({
    id: project.id,
    name: project.title,
    description: project.subtitle,
    technologies: project.technologies.map(t => t.name),
    link: `/project/${project.id}`,
  }))
);

const categoriesConfig = {
  school: ['ecole', 'school', 'academic', 'université', 'college'],
  personal: ['personnel', 'personal', 'projet', 'expérimentation'],
  all: [] as string[],
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

const pageTitle = computed(() => {
  const category = route.params.category;
  switch (category) {
    case 'school':
      return 'Projets académiques';
    case 'personal':
      return 'Projets personnels';
    default:
      return 'Projets';
  }
});

const setView = (view: 'featured' | 'repos') => {
  currentView.value = view;
  router.push({ query: { ...route.query, view } });
};

watch(
  () => route.query.view,
  newView => {
    if (newView === 'featured' || newView === 'repos') {
      currentView.value = newView;
    }
  }
);

onMounted(() => {
  fetchUserRepos();
});
</script>

<template>
  <article class="projects-card">
    <header class="projects-header">
      <h2>{{ pageTitle }}</h2>
      <p class="subtitle">Découvrez mes réalisations majeures et mes dépôts de code.</p>
    </header>

    <div class="view-toggle">
      <button
        type="button"
        :class="['toggle-btn', { active: currentView === 'featured' }]"
        :disabled="currentView === 'featured'"
        @click="setView('featured')"
      >
        Projets vedettes
      </button>
      <button
        type="button"
        :class="['toggle-btn', { active: currentView === 'repos' }]"
        :disabled="currentView === 'repos'"
        @click="setView('repos')"
      >
        Dépôts GitHub
      </button>
    </div>

    <div v-if="loading" class="status-container">
      <p class="loading">Chargement des données…</p>
    </div>

    <section v-else-if="currentView === 'featured'" class="projects-section">
      <h3>Projets majeurs</h3>
      <div class="projects-grid">
        <router-link
          v-for="project in featuredProjects"
          :key="project.id"
          :to="project.link"
          class="project-item-card"
        >
          <div class="card-header">
            <span class="project-title">{{ project.name }}</span>
          </div>
          <p class="project-desc">{{ project.description }}</p>
          <div class="card-footer">
            <div class="tech-tags">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <section v-else-if="filteredRepos.length > 0" class="projects-section">
      <h3>Dépôts GitHub</h3>
      <div class="projects-grid">
        <a
          v-for="repo in filteredRepos"
          :key="repo.id"
          :href="repo.html_url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-item-card"
        >
          <div class="card-header">
            <span class="project-title">{{ repo.name }}</span>
            <span v-if="repo.stargazers_count" class="star-count"
              >★ {{ repo.stargazers_count }}</span
            >
          </div>
          <p class="project-desc">{{ repo.description || 'Sans description.' }}</p>
          <div v-if="repo.language" class="card-footer">
            <div class="tech-tags">
              <span class="tech-tag">{{ repo.language }}</span>
            </div>
          </div>
        </a>
      </div>
    </section>

    <div v-else class="status-container">
      <p class="empty-msg">
        Aucun projet trouvé.
        <router-link to="/repos/all">Voir tout</router-link>
      </p>
    </div>
  </article>
</template>

<style scoped>
.projects-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.projects-header h2 {
  margin: 0;
}

.subtitle {
  margin: 0.35rem 0 0;
  color: var(--text-muted);
  font-size: 1.05rem;
}

/* Bascule d'affichage */
.view-toggle {
  display: flex;
  gap: 0.5rem;
  background-color: var(--bg-main);
  padding: 0.25rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  align-self: flex-start;
}

.toggle-btn {
  margin-top: 0;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.875rem;
  box-shadow: none;
  transition: all 0.15s ease;
}

.toggle-btn:hover:not(:disabled) {
  color: var(--text-main);
  background-color: rgba(0, 0, 0, 0.03);
}

.toggle-btn.active {
  background-color: var(--bg-surface);
  color: var(--primary);
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  cursor: default;
}

.projects-section {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

.projects-section h3 {
  margin-top: 0;
  margin-bottom: 1.25rem;
}

/* Grille des cartes de projet */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.project-item-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
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

.project-item-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  text-decoration: none;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.project-title {
  font-weight: 600;
  color: var(--primary);
  font-size: 1.05rem;
}

.star-count {
  font-size: 0.8rem;
  font-weight: 600;
  color: #d97706;
  background-color: #fef3c7;
  padding: 0.15rem 0.4rem;
  border-radius: var(--radius-sm);
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-main);
  margin: 0 0 1rem;
  line-height: 1.4;
  flex-grow: 1;
}

.card-footer {
  display: flex;
  margin-top: auto;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.tech-tag {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-muted);
  background-color: var(--bg-main);
  border: 1px solid var(--border);
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

/* Etats de chargement et vide */
.status-container {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

.empty-msg {
  margin: 0;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .view-toggle {
    width: 100%;
  }

  .toggle-btn {
    flex: 1;
    text-align: center;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
