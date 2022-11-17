import Vue from 'vue'
import Router from 'vue-router'
import PlayRoomScreen from '../play_room/components/PlayRoomScreen.vue'
import MainMenu from '../play_room/components/MainMenu.vue'
import Chapter from '../play_room/components/Chapter.vue'
import Login from '../play_room/components/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/play-room',
      name: 'play-room',
      component: PlayRoomScreen
    },
    // {
    //   path: '/',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/',
      name: 'main-menu',
      component: MainMenu,
    },
    {
      path: '/chapter',
      name: 'chapter',
      component: Chapter,
    },
  ]
})
