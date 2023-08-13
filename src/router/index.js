import { createRouter, createWebHistory } from 'vue-router'
import pageArticle from "../views/page-article.vue";
import pageArticles from "../views/page-articles.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: pageArticles,
    },
    {
      path: '/article',
      name: 'article',
      component: pageArticle,
    },
  ]
})

export default router
