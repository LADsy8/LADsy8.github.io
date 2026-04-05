import { ref, watch } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  // Charger le thème depuis localStorage
  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    isDark.value = savedTheme === 'dark';
    applyTheme();
  };

  // Appliquer le thème au document
  const applyTheme = () => {
    const root = document.documentElement;
    if (isDark.value) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  };

  // Basculer le thème
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    applyTheme();
  };

  // Surveiller les changements
  watch(isDark, applyTheme);

  return {
    isDark,
    toggleTheme,
    loadTheme,
  };
}
