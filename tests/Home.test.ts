import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/components/Home.vue';

// Mock du composable
vi.mock('../src/composables/useGithub', () => ({
  useGithub: () => ({
    user: { value: null },
    loading: { value: false },
    error: { value: null },
    fetchUserProfile: vi.fn(),
  }),
}));

describe('Home.vue', () => {
  it('devrait rendre le titre correctement', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [],
    });

    const wrapper = mount(Home, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain('Bienvenue sur mon Portfolio');
  });

  it('devrait afficher les catégories de projets', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [],
    });

    const wrapper = mount(Home, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain('Projets Académiques');
    expect(wrapper.text()).toContain('Projets Personnels');
    expect(wrapper.text()).toContain('Tous les Dépôts');
  });
});