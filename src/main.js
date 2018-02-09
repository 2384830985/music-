// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import APlayer from 'vue-aplayer-plugin'
import $ from 'jquery'
import Axios from 'axios'
import store from './store/store'
Vue.use(APlayer)
Vue.config.productionTip = false
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  $,
  components: { App },
  template: '<App/>'
})
