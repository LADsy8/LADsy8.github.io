<script setup lang="ts">
import { onMounted, computed, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGithub } from '../composables/useGithub';
import type { GitHubRepository } from '../types/github';
import projectsData from '../assets/data/projects.json';

const route = useRoute();
const router = useRouter();
const { repos: allRepos, loading, fetchUserRepos } = useGithub();

const currentView = ref<'featured' | 'repos'>((route.query.view as 'featured' | 'repos') || 'featured');

const featuredProjects = computed(() =>
  projectsData.projects.map(project => ({
    id: project.id,
    name: project.title,
    description: project.subtitle,
    language: project.technologies.map(t => t.name).join(', '),
    link: `/project/${project.id}`,
  })),
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
  },
);

onMounted(() => {
  fetchUserRepos();
});
</script>

<template>
  <article>
    <h2>{{ pageTitle }}</h2>
    <p>Découvrez mes réalisations majeures et mes dépôts de code.</p>

    <p>
      <button type="button" :disabled="currentView === 'featured'" @click="setView('featured')">
        Projets vedettes
      </button>
      <button type="button" :disabled="currentView === 'repos'" @click="setView('repos')">
        Dépôts GitHub
      </button>
    </p>

    <p v-if="loading" class="loading">Chargement…</p>

    <section v-else-if="currentView === 'featured'">
      <h3>Projets majeurs</h3>
      <ul>
        <li v-for="project in featuredProjects" :key="project.id">
          <router-link :to="project.link">{{ project.name }}</router-link>
          — {{ project.description }} ({{ project.language }})
        </li>
      </ul>
    </section>

    <section v-else-if="filteredRepos.length > 0">
      <h3>Dépôts GitHub</h3>
      <ul>
        <li v-for="repo in filteredRepos" :key="repo.id">
          <a :href="repo.html_url" rel="noopener noreferrer">{{ repo.name }}</a>
          <span v-if="repo.stargazers_count"> — ★ {{ repo.stargazers_count }}</span>
          — {{ repo.description || 'Sans description.' }}
          <span v-if="repo.language"> ({{ repo.language }})</span>
        </li>
      </ul>
    </section>

    <p v-else>Aucun projet trouvé. <router-link to="/repos/all">Voir tout</router-link></p>
  </article>
</template>
