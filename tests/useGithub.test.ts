import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useGithub } from '../src/composables/useGithub';

// Mock de fetch global
global.fetch = vi.fn();

describe('useGithub', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('fetchUserProfile', () => {
    it('devrait récupérer le profil utilisateur avec succès', async () => {
      const mockUser = {
        id: 1,
        login: 'testuser',
        avatar_url: 'https://example.com/avatar.jpg',
        name: 'Test User',
        bio: 'Test bio',
        public_repos: 10,
        followers: 5,
        following: 3,
        html_url: 'https://github.com/testuser',
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockUser),
      });

      const { user, loading, error, fetchUserProfile } = useGithub();

      await fetchUserProfile('testuser');

      expect(user.value).toEqual(mockUser);
      expect(loading.value).toBe(false);
      expect(error.value).toBe(null);
      expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/testuser');
    });

    it('devrait gérer les erreurs API', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });

      const { user, loading, error, fetchUserProfile } = useGithub();

      await fetchUserProfile('nonexistentuser');

      expect(user.value).toBe(null);
      expect(loading.value).toBe(false);
      expect(error.value).toBe('Erreur API: 404 Not Found');
    });
  });

  describe('fetchUserRepos', () => {
    it('devrait récupérer les repositories avec succès', async () => {
      const mockRepos = [
        {
          id: 1,
          name: 'repo1',
          full_name: 'user/repo1',
          description: 'Test repo',
          language: 'TypeScript',
          stargazers_count: 5,
          forks_count: 2,
          html_url: 'https://github.com/user/repo1',
          updated_at: '2024-01-01T00:00:00Z',
        },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockRepos),
      });

      const { repos, loading, error, fetchUserRepos } = useGithub();

      await fetchUserRepos('testuser', 'updated');

      expect(repos.value).toEqual(mockRepos);
      expect(loading.value).toBe(false);
      expect(error.value).toBe(null);
      expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/testuser/repos?sort=updated');
    });
  });
});