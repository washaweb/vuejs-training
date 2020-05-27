import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product-list',
    component: ProductList
  },
  {
    path: '/product/:id', //we ca use arguments in the route
    name: 'product-show',
    props: true, //props gives us the ability to get params from the route args directly in the components props
    component: () =>
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      import(/* webpackChunkName: "ProductShow" */ '../views/ProductShow.vue')
  },
  {
    path: '/product/create',
    name: 'product-create',
    component: () =>
      import(
        /* webpackChunkName: "ProductCreate" */ '../views/ProductCreate.vue'
      )
  },

  // in case we changed the route from about to about-us
  {
    path: '/about-us',
    name: 'About',
    // we can make an alias
    // alias: '/about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // but it is better for seo to do a redirection
  {
    path: '/about',
    redirect: { name: 'About' }
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
