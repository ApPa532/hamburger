import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sub1 from '../views/Sub1.vue'
import Splash from '../views/Splash.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sub1',
    name: 'sub1',
    component: () => import(/* webpackChunkName: "sub1" */ '../views/Sub1.vue')
  },
  {
    path: '/splash',
    name: 'splash',
    component: () => import(/* webpackChunkName: "Splash" */ '../views/Splash.vue')
  },
  {
    path: '/sub2',
    name: 'sub2',
    component: () => import(/* webpackChunkName: "Sub2" */ '../views/Sub2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
