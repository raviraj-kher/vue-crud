import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/Main.vue'
import AdminPage from '../pages/admin/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
