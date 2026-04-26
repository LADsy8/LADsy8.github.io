<script setup lang="ts">
import { onMounted } from 'vue';
import { useGithub } from '../composables/useGithub';

const { user: githubProfile, fetchUserProfile } = useGithub();

onMounted(() => {
  fetchUserProfile();
});
</script>

<template>
  <div class="portfolio-wrapper">
    <div class="container py-5">
      <header class="text-center mb-5 fade-in" data-aos="fade-up">
        <h1 class="display-4 fw-bold gradient-text">Bienvenue sur mon portfolio Professionnelle</h1>
        <div class="underline mx-auto"></div>
      </header>

      <div
        v-if="githubProfile"
        class="profile-card mx-auto p-4 mb-5 shadow-lg"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="profile-content">
          <div class="avatar-container">
            <img :src="githubProfile.avatar_url" alt="Avatar" class="profile-avatar" />
            <div class="status-badge"></div>
          </div>
          <h2 class="mt-3 fw-bold">{{ 'Arthur Dubé'}}</h2>
          <p class="text-muted bio-text">
            {{
              githubProfile.bio ||
              'Développeur Full Stack Junior, Un des créateurs de Air-Métique.'
            }}
          </p>

          <div class="stats d-flex justify-content-center gap-4 mt-3">
            <div class="stat-item">
              <span class="d-block fw-bold">{{ githubProfile.public_repos }}</span>
              <small>Projets</small>
            </div>
            <div class="stat-item">
              <span class="d-block fw-bold">{{ githubProfile.followers }}</span>
              <small>Followers</small>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
        <h3 class="mb-4 section-title">Explorez mon univers</h3>
        <div class="row justify-content-center g-4">
          <div
            class="col-md-4 col-sm-6"
            v-for="(category, index) in [
              { id: 'school', label: 'Projets Académiques', icon: '🎓' },
              { id: 'personal', label: 'Projets Personnels', icon: '🚀' },
              { id: 'all', label: 'Tous les Dépôts', icon: '📂' },
            ]"
            :key="category.id"
            data-aos="zoom-in"
            :data-aos-delay="500 + index * 100"
          >
            <router-link :to="`/repos/${category.id}`" class="category-card">
              <span class="icon">{{ category.icon }}</span>
              <span class="label">{{ category.label }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fond et Global */
.portfolio-wrapper {
  min-height: 100vh;
  background: radial-gradient(circle at top right, #fdfbfb 0%, #ebedee 100%);
  color: #2d3436;
  font-family: 'Inter', sans-serif;
}

/* Texte en dégradé */
.gradient-text {
  background: linear-gradient(45deg, #6c5ce7, #a29bfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.8rem;
}

.underline {
  height: 4px;
  width: 60px;
  background: #6c5ce7;
  border-radius: 2px;
  margin-top: 10px;
}

/* Carte de profil */
.profile-card {
  max-width: 500px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
}

.avatar-container {
  position: relative;
  display: inline-block;
}

.profile-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.status-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background: #00ca4e;
  border: 3px solid white;
  border-radius: 50%;
}

/* Boutons de catégorie */
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  text-decoration: none;
  color: #2d3436;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
}

.category-card:hover {
  background: #6c5ce7;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(108, 92, 231, 0.2);
}

.category-card .icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

/* Animations */
.fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 767px) {
  .gradient-text {
    font-size: 2rem;
  }
  .profile-card {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
