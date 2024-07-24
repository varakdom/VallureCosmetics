import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _685ffab2 = () => interopDefault(import('../pages/assets.vue' /* webpackChunkName: "pages/assets" */))
const _7c3ed834 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _13599dd5 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _3b2cab35 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _7e4bdac7 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _e693a788 = () => interopDefault(import('../pages/Setting.vue' /* webpackChunkName: "pages/Setting" */))
const _8fb0d482 = () => interopDefault(import('../pages/Setting/index.vue' /* webpackChunkName: "pages/Setting/index" */))
const _5a48a946 = () => interopDefault(import('../pages/Setting/account/index.vue' /* webpackChunkName: "pages/Setting/account/index" */))
const _04348b9a = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _14a712c6 = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _133695fc = () => interopDefault(import('../pages/voxcoin.vue' /* webpackChunkName: "pages/voxcoin" */))
const _5b804a44 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/assets",
    component: _685ffab2,
    name: "assets"
  }, {
    path: "/inspire",
    component: _7c3ed834,
    name: "inspire"
  }, {
    path: "/Login",
    component: _13599dd5,
    name: "Login"
  }, {
    path: "/profile",
    component: _3b2cab35,
    name: "profile"
  }, {
    path: "/register",
    component: _7e4bdac7,
    name: "register"
  }, {
    path: "/Setting",
    component: _e693a788,
    children: [{
      path: "",
      component: _8fb0d482,
      name: "Setting"
    }, {
      path: "account",
      component: _5a48a946,
      name: "Setting-account"
    }]
  }, {
    path: "/shop",
    component: _04348b9a,
    children: [{
      path: "",
      component: _14a712c6,
      name: "shop"
    }]
  }, {
    path: "/voxcoin",
    component: _133695fc,
    name: "voxcoin"
  }, {
    path: "/",
    component: _5b804a44,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
