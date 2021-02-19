import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tratamente',
    name: 'Details',
    props: true,
    component: () => import(/* webpackChunkName: "destinationDetails"*/ '@/views/Details.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
