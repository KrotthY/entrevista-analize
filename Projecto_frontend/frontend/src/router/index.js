import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListAuto from '@/components/Auto/ListAuto'
import EditAuto from '@/components/Auto/EditAuto'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/autos',
    name: 'ListAuto',
    component: ListAuto
  },
  {
    path: '/autos/edit',
    name: 'EditAuto',
    component: EditAuto
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
