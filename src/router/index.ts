import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/topics',
      name: 'topics',
      component: () => import('../views/TopicList.vue'),
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: () => import('../views/TopicDetail.vue'),
    },
  ],
})

export default router
