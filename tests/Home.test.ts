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
  it('affiche le pitch sans répéter le nom', () => {
    const dummyComponent = { template: '<div />' };
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: dummyComponent },
        { path: '/repos/all', component: dummyComponent },
        { path: '/about', component: dummyComponent },
        { path: '/skills', component: dummyComponent },
        { path: '/contact', component: dummyComponent },
        { path: '/project/:id', component: dummyComponent },
      ],
    });

    const wrapper = mount(Home, {
      global: { plugins: [router] },
    });

    expect(wrapper.text()).not.toContain('Arthur Dubé');
    expect(wrapper.text().toLowerCase()).toContain('développeur junior');
    expect(wrapper.text()).toContain('Air-Métique');
  });
});