<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import projectsData from '../assets/data/projects.json';

const route = useRoute();

// Récupère le projet via l'ID dans l'URL
const project = computed(() => {
  return projectsData.projects.find(p => p.id === route.params.id);
});

const getInitials = (fullName: string) => {
  // 1. Enlever les parenthèses et leur contenu
  const cleanName = fullName.replace(/\s*\(.*?\)\s*/g, '');
  // 2. Extraire les premières lettres
  return cleanName
    .split(' ')
    .filter(name => name.length > 0)
    .map(name => name[0].toUpperCase())
    .join('');
};
</script>

<template>
  <div v-if="project" class="project-page fade-in">
    <!-- Header du Projet -->
    <header class="project-header py-5 mb-5 text-white bg-dark">
      <div class="container">
        <router-link to="/repos/all" class="btn btn-dynamic btn-sm mb-4">
  <i class="fas fa-arrow-left me-1"></i> Retour aux projets
</router-link>
        <div class="row align-items-center">
          <div class="col-md-8">
            <span class="badge bg-accent mb-2">{{ project.context }}</span>
            <h1 class="display-3 fw-bold">{{ project.title }}</h1>
            <p class="lead">{{ project.subtitle }}</p>
          </div>
          <div class="col-md-4 text-md-end">
            <div class="info-box p-3 border rounded shadow-sm">
  <p class="mb-1">
    <strong>Client :</strong> {{ project.client }}
  </p>
  <p class="mb-1">
    <strong>Durée :</strong> {{ project.duration }}
  </p>
  <p class="mb-0">
    <strong>Rôle :</strong> Team Lead / IoT
  </p>
</div>
          </div>
        </div>
      </div>
    </header>

    <main class="container mb-5">
      <div class="row g-5">
        <!-- Colonne Gauche : Détails -->
        <div class="col-lg-8">
          <section class="mb-5">
            <h2 class="section-title">À propos du projet</h2>
            <p class="description-text">{{ project.description }}</p>
          </section>

          <section class="mb-5">
            <h2 class="section-title">Fonctionnalités clés</h2>
            <div class="row g-3">
              <div v-for="feature in project.features" :key="feature" class="col-md-6">
                <div class="feature-card p-3 h-100">
                  <span class="check-icon">✓</span> {{ feature }}
                </div>
              </div>
            </div>
          </section>

          <section class="mb-5">
            <h2 class="section-title">Architecture & Matériel</h2>
            <ul class="list-group list-group-flush shadow-sm rounded">
              <li v-for="item in project.hardware" :key="item" class="list-group-item">
                 {{ item }}
              </li>
            </ul>
          </section>
        </div>

        <!-- Colonne Droite : Stack & Équipe -->
        <div class="col-lg-4">
          <div class="sticky-top" style="top: 2rem;">
            <!-- Technologies -->
            <div class="card mb-4 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">Stack Technologique</h5>
                <div class="d-flex flex-wrap gap-2 mt-3">
                  <span v-for="tech in project.technologies" :key="tech.name" class="tech-badge">
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Équipe -->
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">L'Équipe Agile</h5>
                <ul class="list-unstyled mt-3">
                  <li v-for="member in project.team" :key="member" class="mb-2 team-member">
                    <span class="initials">{{ getInitials(member) }}</span>
                    {{ member }}
                  </li>
                </ul>
              </div>
            </div>

            <a :href="project.links.gitlab" target="_blank" class="btn btn-accent w-100 mt-4 py-3 fw-bold">
              Voir sur GitHub <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- État de chargement ou erreur -->
  <div v-else class="container py-5 text-center">
    <h3>Projet en cours de chargement ou introuvable...</h3>
    <router-link to="/repos/all" class="btn btn-primary mt-3">Retour aux projets</router-link>
  </div>
</template>

<style scoped>

</style>