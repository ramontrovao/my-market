import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      component: DefaultLayout,
      children: []
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
