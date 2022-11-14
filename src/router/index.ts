import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import PlayRoomScreen from '../play_room/components/PlayRoomScreen.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'playroom',
    component: () => import('../play_room/components/PlayRoomScreen.vue')
  },
  // {
  //   path: '/',
  //   name: 'login',
  //   component: () => import('../play_room/components/Login.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
