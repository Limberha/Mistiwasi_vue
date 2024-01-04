import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarritoView from '../views/CarritoView.vue'
import ContactoView from '../views/ContactoView.vue'
import ProductoDetalleView from '../views/ProductoDetalleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import('../views/CarritoView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/productodetalle/:id',
      name: 'productodetalle',
      component: ProductoDetalleView
    }
  ]
})

export default router
