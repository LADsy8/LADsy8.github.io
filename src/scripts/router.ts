// router.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Skills from '../views/Skills.vue';
import Contact from '../views/Contact.vue';
import ReposPage from '../views/ReposPage.vue';

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
