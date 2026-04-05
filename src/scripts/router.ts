// router.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';
import ReposPage from '../components/ReposPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact },
  { path: '/repos/:category', component: ReposPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
