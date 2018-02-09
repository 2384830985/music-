<template>
  <div>
    <div class="t-playing-bottom">
      <div class="music">
        <a-player
          v-if="music1!=''&&music1"
          ref="aplayer"
          :narrow="narrow"
          :autoplay="autoplay"
          :showlrc="showlrc"
          :mutex="mutex"
          :fold="fold"
          :speed="speed"
          :theme="theme"
          :mode="mode"
          :preload="preload"
          :listmaxheight="listmaxheight"
          :music="music1"
          @play="getLyricAsync"
        ></a-player>
        <!--@click="aplayer.toggle()" 开启关闭-->
        <!--aplayer.toggleVolume()  静音-->
        <!--narrow 显示歌词名称之类-->
        <!--showlrc 显示大小-->
        <!--fold 是否显示列表-->
        <!--speed = (speed * 1000 + 0.1 * 1000) / 1000 显示播放速度-->
        <!--aplayer.togglePlayMode() 播放器切换方式-->
        <!--@click="music.splice(0, 1) 删除歌曲"-->
        <!--@click="fold = false; music.reverse()" 清空音乐-->
        <!--@click="listmaxheight = Number.parseInt(listmaxheight) + 33 + 'px'" 播放器高-->
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      aplayer: null,
      narrow: false,
      autoplay: true,
      showlrc: false,
      mutex: true,
      fold: false,
      speed: 1,
      theme: '#ad7a86',
      mode: 'circulation',
      preload: 'metadata',
      listmaxheight: '200px',
      music: []
    }
  },
  mounted () {
    this.aplayer = this.$refs.aplayer
  },

  methods: {
    changeMode (res) {
      this.$store.commit('changeMode', res)
    },
    changemodel () {
      this.$forceUpdate()
    },
    getLyricAsync () {
      console.log(2) // 播放开始事件
    },
    setMusic () {
      const music = {}
      if (this.$store.state.sideBar.current && this.$store.state.sideBar.current != '') {
        music.title = this.$store.state.sideBar.current[0].title
        music.author = this.$store.state.sideBar.current[0].author
        music.pic = this.$store.state.sideBar.current[0].pic
        music.id = this.$store.state.sideBar.current[0].id
        music.url = this.$store.state.sideBar.current[0].url
        music.lrc = '[01:00]啦啦啦啦啦啦\n[02:00]喵喵喵喵喵喵\n[03:00]呱呱呱呱呱呱'
        setTimeout(() => {
          this.aplayer.play(0)
          this.aplayer.setMusic(music)
        }, 200)
      }
    }
  },
  computed: {
    modeList () {
      return this.$store.state.sideBar.mode
    },
    music1 () {
      this.setMusic()
      return this.$store.state.sideBar.current ? this.$store.state.sideBar.current : ''
    }
  },
  watch: {
  }

}
</script>

<style>
  @import "../../../static/APlayer.min.css";
  .t-playing-bottom{
    z-index: 100;
    width: 100%;
    /*height: 315px;*/
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
  }
  .aplayer{
    margin: 0!important;
  }
</style>
