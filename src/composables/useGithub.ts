import { ref } from 'vue';
import type { GitHubUser, GitHubRepository } from '../types/github';

/**
 * Composable pour gérer les appels à l'API GitHub
 * Fournit des fonctions pour récupérer le profil utilisateur et les repositories
 */
export function useGithub() {
  const user = ref<GitHubUser | null>(null);
  const repos = ref<GitHubRepository[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  /**
   * Récupère le profil GitHub de l'utilisateur
   * @param username - Nom d'utilisateur GitHub (par défaut 'ladsy8')
   */
  const fetchUserProfile = async (username: string = 'ladsy8') => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
      }
      const data: GitHubUser = await response.json();
      user.value = data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erreur inconnue';
      console.error('Erreur lors de la récupération du profil:', err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Récupère les repositories GitHub de l'utilisateur
   * @param username - Nom d'utilisateur GitHub (par défaut 'ladsy8')
   * @param sort - Tri des repos (par défaut 'updated')
   */
  const fetchUserRepos = async (username: string = 'ladsy8', sort: string = 'updated') => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=${sort}`);
      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
      }
      const data: GitHubRepository[] = await response.json();
      repos.value = data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erreur inconnue';
      console.error('Erreur lors de la récupération des repos:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    repos,
    loading,
    error,
    fetchUserProfile,
    fetchUserRepos,
  };
}