import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d0544d1a = () => interopDefault(import('../pages/chapter.vue' /* webpackChunkName: "pages/chapter" */))
const _12427899 = () => interopDefault(import('../pages/create-new.vue' /* webpackChunkName: "pages/create-new" */))
const _9bd16be2 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5c94fbe4 = () => interopDefault(import('../pages/multiple-player.vue' /* webpackChunkName: "pages/multiple-player" */))
const _7a53a40c = () => interopDefault(import('../pages/play-room.vue' /* webpackChunkName: "pages/play-room" */))
const _2f20b210 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/chapter",
    component: _d0544d1a,
    name: "chapter___en"
  }, {
    path: "/create-new",
    component: _12427899,
    name: "create-new___en"
  }, {
    path: "/login",
    component: _9bd16be2,
    name: "login___en"
  }, {
    path: "/multiple-player",
    component: _5c94fbe4,
    name: "multiple-player___en"
  }, {
    path: "/play-room",
    component: _7a53a40c,
    name: "play-room___en"
  }, {
    path: "/",
    component: _2f20b210,
    name: "index___en"
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
