import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dondeEstamos',
    name: 'DondeEstamos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DondeEstamos.vue')
  },
  {
    path: '/producto',
    name: 'Producto',
    component: () => import('../views/Producto.vue')
  },
  {
    path: '/detalleInstrumento/:id',
    name: 'DetalleInstrumento',
    component: () => import('../views/DetalleInstrumento.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
