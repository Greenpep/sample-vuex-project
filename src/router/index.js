import { createRouter, createWebHistory } from 'vue-router'
import Vuex from 'vuex'
import Home from '../views/Home.vue'
import SignUp from '../views/Signup.vue'
import Store from '../views/Store.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
