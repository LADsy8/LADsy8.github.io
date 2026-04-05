<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const allRepos = ref<any[]>([]);
const loading = ref(true);

const fetchRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/ladsy8/repos?sort=updated`);
    allRepos.value = await response.json();
  } catch (error) {
    console.error('Erreur:', error);
  } finally {
    loading.value = false;
  }
};

// Logique de filtrage simplifiée et réactive
const filteredRepos = computed(() => {
  const category = route.params.category as string;
  
  if (category === 'school') {
    return allRepos.value.filter(repo => repo.description?.toLowerCase().includes("ecole"));
  } else if (category === 'personal') {
    return allRepos.value.filter(repo => repo.description?.toLowerCase().includes("personnel"));
  }
  return allRepos.value;
});

const getCategoryTitle = computed(() => {
  const category = route.params.category;
  if (category === 'school') return 'Projets Académiques';
  if (category === 'personal') return 'Projets Personnels';
  return 'Tous mes Projets';
});

onMounted(fetchRepos);
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
                {{ repo.description || 'Exploration technique et développement de fonctionnalités innovantes.' }}
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
  background-color: #f8f9fa;
}

.section-title {
  font-weight: 800;
  color: #2d3436;
  font-size: 2.5rem;
}

.header-line {
  width: 50px;
  height: 4px;
  background: #6c5ce7;
  margin: 15px auto;
  border-radius: 2px;
}

/* Style de la Carte */
.repo-card {
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.repo-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  border-color: #6c5ce7;
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
}

.folder-icon { font-size: 1.5rem; }
.repo-stats { font-size: 0.85rem; color: #b2bec3; font-weight: 600; }

.repo-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3436;
  margin-bottom: 0.8rem;
  text-transform: capitalize;
}

.repo-description {
  color: #636e72;
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

/* Footer de la carte */
.repo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #f1f2f6;
}

.repo-lang {
  font-size: 0.85rem;
  font-weight: 600;
  color: #2d3436;
  display: flex;
  align-items: center;
  gap: 6px;
}

.lang-dot {
  width: 8px;
  height: 8px;
  background: #6c5ce7;
  border-radius: 50%;
}

.github-link {
  color: #6c5ce7;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap 0.2s;
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
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 576px) {
  .section-title { font-size: 1.8rem; }
  .card-content { padding: 1.2rem; }
}
</style>