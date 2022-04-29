import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/Main.vue'
import AdminPage from '../pages/admin/Admin.vue'
import Products from '../pages/admin/Products.vue'
import ProductCreate from '../pages/admin/ProductCreate.vue'
import ProductEdit from '../pages/admin/ProductEdit.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage,
    children: [
      {
        path: 'products',
        name: 'ProductsList',
        component: Products,
      },
      {
        path: 'products/create',
        name: 'ProductCreate',
        component: ProductCreate,
      },
      {
        path: 'products/:id/edit',
        name: 'ProductEdit',
        component: ProductEdit,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
