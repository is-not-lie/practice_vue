import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Home from '../views/Home'
import Product from '../views/Product'
import Order from '../views/Order'
import Money from '../views/Money'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'main',
    meta: '首页',
    component: Main,
    children: [
      {
        path: '/main/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/main/product',
        name: 'product',
        component: Product,
      },
      {
        path: '/main/order',
        name: 'order',
        component: Order,
      },
      {
        path: '/main/money',
        name: 'money',
        component: Money,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
