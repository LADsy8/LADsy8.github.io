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
/* --- 1. HEADER & LAYOUT --- */
.project-header {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-bottom: 4px solid var(--accent);
  color: #ffffff !important;
}

/* Force la couleur blanche pour tous les textes du header */
.project-header, 
.project-header h1, 
.project-header p, /* Ajoute le 'p' ici pour cibler tout le texte après les strong */
.project-header p.lead,
.project-header .badge,
.project-header .info-box {
  color: #ffffff !important;
}

.project-header p.lead {
  opacity: 0.9;
  color: #e2e8f0 !important;
}

/* --- 2. BOUTONS --- */
/* Style commun pour les boutons du header et d'action */
.btn-dynamic, .btn-accent {
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #ffffff !important;
}

/* Bouton Retour */
.btn-dynamic {
  background-color: #2d3436 !important; 
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
}

.btn-dynamic:hover {
  background-color: var(--accent) !important;
  transform: translateX(-5px);
}

/* Bouton Action Principal (GitHub) */
.btn-accent {
  background-color: var(--accent) !important;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.btn-accent:hover {
  filter: brightness(1.1);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* --- 3. COMPOSANTS SPÉCIFIQUES --- */
.info-box {
  background-color: rgba(0, 0, 0, 0.2) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.info-box strong {
  color: var(--accent) !important;
  font-weight: 700;
}

.section-title {
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 40px; height: 3px;
  background: var(--accent);
}

.feature-card {
  background: var(--card-bg);
  border-radius: 12px;
  border-left: 4px solid var(--accent);
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  color: var(--text-primary);
}

.tech-badge {
  background: rgba(var(--accent-rgb), 0.1); /* Optionnel: utilise une version pâle de ton accent */
  background-color: #f1f5f9;
  color: #475569;
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.initials {
  width: 32px; height: 32px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: bold;
}

/* --- 4. UTILITAIRES & ANIMATIONS --- */
.fade-in { animation: fadeIn 0.5s ease-in; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}
</style>