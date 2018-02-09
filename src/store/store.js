/**
 * Created by Administrator on 2018/2/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Sidebar from './sidebar.js'
import ButtonAlert from './buttonAl.js'
import SongSheet1 from './songsheet.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    allInfo: [],
    isMenuShow: false
  },
  getters: {
    // 暴露数据出去
    getAllInfo: state => state.allInfo ? state.allInfo : '',
    getmusic: state => state.allInfo.music ? state.allInfo.music : ''
  },
  mutations: {
    // 方法
    obtain (state, obj) {
      state.allInfo = obj
    },
    showMenu (state) {
      state.isMenuShow = true
    },
    hideMenu (state) {
      state.isMenuShow = false
    }
  },
  actions: {
    // 回调处理AJAX回来的参数
    set_AllInfo ({commit}, ele) {
      commit('obtain', ele)
    }
  },
  modules: {
    // 模块
    sideBar: Sidebar,
    buttonAlert: ButtonAlert,
    SongSheet: SongSheet1
  }
})

export default store
