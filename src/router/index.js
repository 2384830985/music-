import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Personality from '@/components/home/personality'
import Song from '@/components/home/song'
import Ranking from '@/components/home/ranking'
import Station from '@/components/home/station'
import List from '@/components/list/list'
import Music from '@/components/music/music'
import Vuex from 'vuex'
Vue.use(Router)
Vue.use(Vuex)
export default new Router({
  routes: [
    {
      path: '/', /*默认*/
      redirect: '/music'
    },
    {
      path: '/home', /*首页*/
      component: Home,
      children: [
        {
          path: '',
          redirect: '/home/personality'
        },
        {
          path: '/home/personality',
          component: Personality
        },
        {
          path: '/home/song',
          component: Song
        },
        {
          path: '/home/ranking',
          component: Ranking
        },
        {
          path: '/home/station',
          component: Station
        }
      ]
    },
    {
      path: '/music',/*音乐*/
      component: Music
    },
    {
      path: '/list',/*列表*/
      component: List
    }
  ]
})
