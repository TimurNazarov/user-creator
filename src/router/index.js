import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user/view/:id',
    name: 'View User',
    component: Home
  },
  {
    path: '/user/create/:id',
    name: 'Create User',
    component: Home
  },
  {
    path: '/user/edit/:id',
    name: 'Edit User',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
