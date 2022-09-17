import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Payments from '../views/Payments.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'users',
    component: Users
  },
  {
    path: '/payments',
    name: 'payments',
    component: Payments
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router