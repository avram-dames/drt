import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toate-tratamentele',
    name: 'Details',
    props: true,
    component: () => import(/* webpackChunkName: "destinationDetails"*/ '@/views/Details.vue'),
  },
  {
    path: '/preventie',
    name: 'Prevention',
    props: true,
    component: () => import(/* webpackChunkName: "destinationDetails"*/ '@/views/Prevention.vue'),
  },
  {
    path: '/endodontie',
    name: 'Endodontics',
    props: true,
    component: () => import(/* webpackChunkName: "destinationDetails"*/ '@/views/Endodontics.vue'),
  },
  {
    path: '/proteze-dentare',
    name: 'Prosthetics',
    props: true,
    component: () => import(/* webpackChunkName: "destinationDetails"*/ '@/views/Prosthetics.vue'),
  },
  {
    path: '/chirurgie-dentara',
    name: 'Surgery',
    props: true,
    component: () => import(/* webpackChunkName: "destinationDetails"*/ '@/views/Surgery.vue'),
  },
  {
    path: '/implanturi-dentare',
    name: 'Implantology',
    props: true,
    component: () => import(/* webpackChunkName: "destinationDetails"*/ '@/views/Implantology.vue'),
  },
  {
    path: '/ortodontie',
    name: 'Orthodontics',
    props: true,
    component: () => import(/* webpackChunkName: "destinationDetails"*/ '@/views/Orthodontics.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound"*/ '@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      console.log(to.hash)
      return { selector: to.hash }
    }
  },
  routes
})

export default router
