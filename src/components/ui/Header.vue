<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref<boolean>(false)

const toggleTheme = (): void => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-group">
        <router-link to="/" class="logo">
          <span>Arthur.code</span>
        </router-link>

        <button 
          type="button" 
          class="theme-toggle-btn mobile-theme-btn" 
          :title="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'"
          @click="toggleTheme"
        >
          <span>{{ isDark ? '☀️' : '🌙' }}</span>
        </button>
      </div>

      <nav class="nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/repos/all">Projets</router-link>
        <router-link to="/skills">Compétences</router-link>
        <router-link to="/about">À propos</router-link>
        <router-link to="/contact">Contact</router-link>

        <button 
          type="button" 
          class="theme-toggle-btn desktop-theme-btn" 
          :title="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'"
          @click="toggleTheme"
        >
          <span>{{ isDark ? '☀️' : '🌙' }}</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-main);
  text-decoration: none;
  white-space: nowrap;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.nav a {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  white-space: nowrap;
  transition: color 0.15s ease;
}

.nav a:hover,
.nav a.router-link-active {
  color: var(--primary);
}

.theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  margin: 0;
  background-color: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.15s ease;
}

.theme-toggle-btn:hover {
  border-color: var(--primary);
}

.mobile-theme-btn {
  display: none;
}

.desktop-theme-btn {
  display: inline-flex;
}

@media (min-width: 1440px) {
  .header-container {
    max-width: 1400px;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    height: auto;
    padding: 0.75rem 1rem;
    gap: 0.75rem;
  }

  .mobile-theme-btn {
    display: inline-flex;
  }

  .desktop-theme-btn {
    display: none;
  }

  .nav {
    width: 100%;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .nav a {
    font-size: 0.875rem;
  }
}
</style>