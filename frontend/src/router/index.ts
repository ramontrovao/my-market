import { createRouter, createWebHistory, routerKey } from 'vue-router'

import DefaultLayout from '../layouts/DefaultLayout.vue'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import PostView from '../views/PostView.vue'
import MyAdvertises from '../views/MyAdvertises.vue'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: DefaultLayout,
      children: [
        { path: '/home', component: HomeView },
        { path: '/perfil', component: ProfileView },
        { path: '/post/:id', component: PostView },
        { path: '/meus-anuncios', component: MyAdvertises }
      ],
      meta: {
        auth: true
      }
    },
    {
      path: '/',
      component: LoginView
    },
    {
      path: '/register',
      component: RegisterView
    }
  ]
})

export default router
