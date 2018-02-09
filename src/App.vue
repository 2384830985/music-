<template>
  <div id="app">
    <!--页头组件-->
    <v-header></v-header>
    <!--个人中心-->
    <v-personal></v-personal>
    <!--底部音乐播放器-->
    <v-playing></v-playing>
    <!--路由-->
    <router-view/>
    <!--aliert组件-->
    <btton-al></btton-al>
    <!--歌单列表-->
    <v-song></v-song>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
import './assets/js/bootstrap.min'
import axios from 'axios'
import Personal from './components/personal/personal.vue'
import Playing from './components/playing/playing.vue'
import BttonAl from './components/lib/AlertButton.vue'
import Song from './components/songSheet/song.vue'
export default {
  name: 'App',
  data () {
    return {
      recommend: []
    }
  },
  components: {
    'v-header': Header,
    'v-personal': Personal,
    'v-playing': Playing,
    'v-song': Song,
    BttonAl
  },
  methods: {
  },
  created () {
    // 运行方法
    axios.get('./static/data.json').then(res => {
      this.$store.dispatch('set_AllInfo', res.data)
    }, (err) => {
      alert(err)
    })
  }
}
</script>

<style>
@import "assets/css/bootstrap.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  padding-bottom: 70px;
}
</style>
