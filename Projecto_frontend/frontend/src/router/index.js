import { createRouter, createWebHistory } from 'vue-router'
import VistaAuto from '@/components/Auto/VistaAuto'
import EditAuto from '@/components/Auto/EditAuto'
import ListaAuto from '@/components/Auto/ListaAuto'

const routes = [
  {
    path: '/',
    name: 'VistaAuto',
    component: VistaAuto
  },

  {
    path: '/lista',
    name: 'ListaAuto',
    component: ListaAuto
  },
  {
    path: '/editar/:id',
    name: 'EditAuto',
    component: EditAuto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
