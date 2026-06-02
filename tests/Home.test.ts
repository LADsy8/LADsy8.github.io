import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue';

vi.mock('../src/composables/useGithub', () => ({
  useGithub: () => ({
    user: { value: null },
    loading: { value: false },
    error: { value: null },
    fetchUserProfile: vi.fn(),
  }),
}));

describe('Home.vue', () => {
  it('affiche le titre portfolio', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [],
    });

    const wrapper = mount(Home, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain('Portfolio');
    expect(wrapper.text()).toContain('Arthur Dubé');
  });

  it('affiche les liens vers les projets', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [],
    });

    const wrapper = mount(Home, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain('Projets vedettes');
    expect(wrapper.text()).toContain('Dépôts GitHub');
  });
});
