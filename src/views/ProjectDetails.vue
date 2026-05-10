<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import projectsData from '../assets/data/projects.json';

const route = useRoute();

// Récupère le projet via l'ID dans l'URL
const project = computed(() => {
  return projectsData.projects.find(p => p.id === route.params.id);
});
</script>

<template>
  <div v-if="project" class="project-page fade-in">
    <!-- Header du Projet -->
    <header class="project-header py-5 mb-5 text-white bg-dark">
      <div class="container">
        <router-link to="/repos/all" class="btn btn-outline-light btn-sm mb-4">← Retour</router-link>
        <div class="row align-items-center">
          <div class="col-md-8">
            <span class="badge bg-accent mb-2">{{ project.context }}</span>
            <h1 class="display-3 fw-bold">{{ project.title }}</h1>
            <p class="lead">{{ project.subtitle }}</p>
          </div>
          <div class="col-md-4 text-md-end">
            <div class="info-box p-3 border rounded shadow-sm bg-light text-dark">
              <p class="mb-1"><strong>Client:</strong> {{ project.client }}</p>
              <p class="mb-1"><strong>Durée:</strong> {{ project.duration }}</p>
              <p class="mb-0"><strong>Rôle:</strong> Scrum Master / IoT</p>
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
                <i class="fas fa-microchip me-2"></i> {{ item }}
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
                    <span class="initials">{{ member.split(' ').map(n => n[0]).join('') }}</span>
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
.project-header {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-bottom: 4px solid var(--accent);
}

.bg-accent { background-color: var(--accent); }
.btn-accent { 
  background-color: var(--accent); 
  color: white; 
  transition: transform 0.2s;
}
.btn-accent:hover { transform: translateY(-3px); color: white; }

.section-title {
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 3px;
  background: var(--accent);
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.feature-card {
  background: var(--card-bg);
  border-radius: 12px;
  border-left: 4px solid var(--accent);
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.tech-badge {
  background: #f1f5f9;
  color: #475569;
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.team-member {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.initials {
  width: 32px;
  height: 32px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>