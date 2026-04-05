// router.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ReposPage from '../components/ReposPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/repos/:category', component: ReposPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
