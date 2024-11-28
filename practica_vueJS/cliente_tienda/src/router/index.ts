import Personal_AgregarVue from '@/modulos/personal/vistas/Personal_AgregarVue.vue'
import PersonalEditarVue from '@/modulos/personal/vistas/PersonalEditarVue.vue'
import PersonalElimininarVue from '@/modulos/personal/vistas/PersonalElimininarVue.vue'
import PersonalVue from '@/modulos/personal/vistas/personalVue.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //  {
    //    path: '/',
    //    name: 'home',
    //    component: HomeView,
    //  },
     {
      path: '/personal',
      name: 'personal',
      component: PersonalVue,
    },
    {
      path: '/personal/agregar',
      name: 'personalAgregar',
      component: Personal_AgregarVue,
    },
    {
      path: '/personal/:id/editar',
      name: 'personalEditar',
      component: PersonalEditarVue,
    },
    {
      path: '/personal/:id/eliminar',
      name: 'personalEliminar',
      component: PersonalElimininarVue,
    },
  ],
})

export default router
