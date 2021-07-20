import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import CheckLogin from '@/views/CheckLogin'
import { isNil } from 'lodash'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: 'Kuiristo'
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/check-login',
      name: 'check-login',
      component: CheckLogin,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/Products.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      props: true,
      component: () =>
        import(/* webpackChunkName: "client-chunk-product-details" */ '@/views/Product.vue')
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/Recipes.vue')
    },
    {
      path: '/addrecipe',
      name: 'addrecipe',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/AddRecipe.vue')
    },
    {
      path: '/deleterecipe',
      name: 'deleterecipe',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/DeleteRecipe.vue')
    },
    {
      path: '/recipes/:id',
      name: 'recipe',
      props: true,
      component: () =>
        import(/* webpackChunkName: "client-chunk-product-details" */ '@/views/Recipe.vue')
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/Shopping.vue')
    },
    {
      path: '/inventory',
      name: 'inventory',
      props: true,
      component: () =>
        import(/* webpackChunkName: "client-chunk-product-details" */ '@/views/Inventory.vue')
    },
    { path: '*', redirect: '/home' }
  ]
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
