<template>
  <nav class="navbar navbar-expand-lg custom-navbar sticky-top">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">
        <span class="brand-dot"></span> Arthur Dubé
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu" 
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span class="toggler-icon"></span>
      </button>

      <div 
        class="collapse navbar-collapse" 
        :class="{ 'show': isMenuOpen }" 
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item" @click="isMenuOpen = false">
            <router-link to="/" class="nav-link" active-class="active-link"> Accueil </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active-link">
              À Propos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills" class="nav-link" active-class="active-link">
              Compétences
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/repos/all" class="nav-link" active-class="active-link">
              Projets
            </router-link>
          </li>
          <li class="nav-item ms-lg-3">
            <router-link to="/contact" class="btn-contact"> Me contacter </router-link>
          </li>
          <li class="nav-item ms-2">
            <button
              @click="toggleTheme"
              class="theme-toggle"
              :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
            >
              <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {ref, onMounted } from 'vue';
import { useTheme } from '../../composables/useTheme';

const { isDark, toggleTheme, loadTheme } = useTheme();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
onMounted(() => {
  loadTheme();
});
</script>

<style scoped>
/* Effet Glassmorphism sur la Nav */
.custom-navbar {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 0;
  transition: all 0.3s ease;
  position: relative;
  z-index: 999;
}

/* Style du Logo */
.navbar-brand {
  font-size: 1.4rem;
  color: #2d3436 !important;
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand-dot {
  width: 10px;
  height: 10px;
  background: #6c5ce7;
  border-radius: 50%;
  display: inline-block;
}

/* Liens de navigation */
.nav-link {
  color: #636e72 !important;
  font-weight: 500;
  padding: 0.5rem 1.2rem !important;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #6c5ce7 !important;
}

/* Indicateur de page active */
.active-link {
  color: #6c5ce7 !important;
}

.active-link::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 1.2rem;
  right: 1.2rem;
  height: 2px;
  background: #6c5ce7;
  border-radius: 2px;
}

/* Bouton Contact style moderne */
.btn-contact {
  background: #6c5ce7;
  color: white !important;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
}

.btn-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);
}

/* Customisation du Toggler (Menu mobile) */
.navbar-toggler {
  border: none;
  padding: 0;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.toggler-icon {
  display: block;
  width: 24px;
  height: 2px;
  background: #2d3436;
  position: relative;
}

.toggler-icon::before,
.toggler-icon::after {
  content: '';
  width: 24px;
  height: 2px;
  background: #2d3436;
  position: absolute;
  left: 0;
}

.toggler-icon::before {
  top: -7px;
}
.toggler-icon::after {
  top: 7px;
}

/* Responsive tweaks */
@media (max-width: 991px) {
  .navbar-collapse {
    background: white;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1000;
  }

  .nav-item {
    width: 100%;
    text-align: center;
    margin: 10px 0;
    padding: 5px 0;
  }

  .nav-link {
    padding: 8px 1rem !important;
    display: block;
    white-space: nowrap;
  }

  .btn-contact {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 24px !important;
  }

  .theme-toggle {
    width: 45px !important;
    height: 45px !important;
    font-size: 1.1rem;
  }
}

/* Dark mode mobile */
[data-theme='dark'] .navbar-collapse {
  background: rgba(18, 18, 18, 0.96);
  color: white;
}

[data-theme='dark'] .custom-navbar {
  background: rgba(18, 18, 18, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

[data-theme='dark'] .navbar-toggler .toggler-icon,
[data-theme='dark'] .navbar-toggler .toggler-icon::before,
[data-theme='dark'] .navbar-toggler .toggler-icon::after {
  background: white;
}

[data-theme='dark'] .nav-link {
  color: var(--text-secondary) !important;
}

[data-theme='dark'] .nav-link:hover,
[data-theme='dark'] .active-link {
  color: var(--accent) !important;
}

[data-theme='dark'] .navbar-brand,
[data-theme='dark'] .btn-contact,
[data-theme='dark'] .theme-toggle {
  color: white !important;
}

[data-theme='dark'] .btn-contact {
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.5);
}

[data-theme='dark'] .theme-toggle {
  border-color: var(--text-secondary);
  color: var(--text-secondary);
}
</style>
