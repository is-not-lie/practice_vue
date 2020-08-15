import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main/main.vue'
import Home from '../views/Home/home.vue'
import Product from '../views/Product/product.vue'
import ProductTable from '../views/Product/product-table.vue'
import ProductUpdate from '../views/Product_update/AddUpdate.vue'
import Order from '../views/Order/order.vue'
import OrderTable from '../views/Order/order-table.vue'
import Money from '../views/Money/money.vue'
import MoneyTable from '../views/Money/MoneyTable.vue'

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
        children: [
          {
            path: '/main/product/:id',
            name: 'product_table',
            props: true,
            component: ProductTable,
          },
        ],
      },
      {
        path: '/main/product_update/:id',
        name: 'product_update',
        props: true,
        component: ProductUpdate,
      },
      {
        path: '/main/order',
        name: 'order',
        component: Order,
        children: [
          {
            path: '/main/order/:id',
            name: 'order_table',
            props: true,
            component: OrderTable,
          },
        ],
      },
      {
        path: '/main/money',
        name: 'money',
        component: Money,
        children: [
          {
            path: '/main/money/:id',
            name: 'money_table',
            props: true,
            component: MoneyTable,
          },
        ],
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
