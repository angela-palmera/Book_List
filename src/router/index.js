import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/InicioView.vue'
import Lista from '../views/ListaLibros.vue'
import Detalle from '../views/DetalleLibro.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/libros', component: Lista },
  { path: '/libros/:id', component: Detalle, props: true }
]

export default createRouter({
  history: createWebHistory('/Book_List/'), 
  routes
})