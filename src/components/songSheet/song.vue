<template>
  <div class="personal">
    <transition name="side2">
      <div class="personal-content2" ref="songsheet" v-show="issongsheetShow">
        <div style="position: relative">
          <div class="personal-content-header">
            <div class="personal-content2-icon pull-left" style="margin-top: 2px" @click="hideMenu">
              <i class="icon iconfont icon-back iconfont-fo"
                 style="font-size: 25px!important;color: white!important;"></i>
            </div>
            <div class="pull-left" style="margin-top: 9px">歌单</div>
          </div>
        </div>
        <div style="position: relative;overflow: auto;width: 100%;height: 100%;">
          <div class="personal-content-user" ref="top">
            <div class="personal-content-user-img">
              <img style="width: 100%;height: 100%" v-if="songsheet[0]" :src="songsheet[0].img_url">
            </div>
            <div class="personal-content-user-content">
              <div class="personal-content-user-content-music">{{getListNmae}}</div>
              <div class="personal-content-user-content-name">
                <img class="personal-content-user-content-logo" :src="getListUserNmae.avatar"/>{{getListUserNmae.name}}
              </div>
            </div>
            <div class="personal-content-operation">
              <div class="personal-content-operation-item">
                <div class="personal-content-operation-item-icon">
                  <i class="icon iconfont icon-smile iconfont-fo"
                     style="font-size: 25px!important;color: #babfbc!important;"></i>
                </div>
                收藏
              </div>
              <div class="personal-content-operation-item">
                <div class="personal-content-operation-item-icon">
                  <i class="icon iconfont icon-smile iconfont-fo"
                     style="font-size: 25px!important;color: white!important;"></i>
                </div>
                评论
              </div>
              <div class="personal-content-operation-item">
                <div class="personal-content-operation-item-icon">
                  <i class="icon iconfont icon-smile iconfont-fo"
                     style="font-size: 25px!important;color: white!important;"></i>
                </div>
                分享
              </div>
              <div class="personal-content-operation-item">
                <div class="personal-content-operation-item-icon">
                  <i class="icon iconfont icon-smile iconfont-fo"
                     style="font-size: 25px!important;color: white!important;"></i>
                </div>
                下载
              </div>
            </div>
          </div>
          <div style="margin-bottom: 120px">
            <div class="personal-content-music">播放全部<span style="color: #babfbc;font-size: 14px">（共{{songsheet.length}}首）</span></div>
            <v-list v-for="(item, index) in songsheet" :key="index" :songsheet="item" :index="index"></v-list>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
import Listcomponent from './listcomponent.vue'
export default({
  data () {
    return {
    }
  },
  components: {
    'v-list': Listcomponent
  },
  computed: {
    issongsheetShow () {
      return this.$store.state.SongSheet.issongsheetShow
    },
    songsheet () {
      console.log(this.$store.state)
      console.log(this.$store.state.sideBar)
      return this.$store.state.SongSheet.songsheet
    },
    getListNmae () {
      return this.$store.state.sideBar.name
    },
    getListUserNmae () {
      return this.$store.state.sideBar.user
    }
  },
  methods: {
    hideMenu () {
      this.$store.commit('hideissongsheetShowShow')
    }
  },
  watch: {
  }
})
</script>

<style>
  .personal-content-music{
    text-align: left;
    padding: 5px 10px;
    border-bottom: 1px solid #babfbc;
  }
  .personal-content2{
    position:fixed;
    left:0;
    right: 0;
    top:0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index:99;
    background-color: #fff
  }
  .personal-content-header{
    overflow: hidden;
    width: 100%;
    position: absolute;
    height: 40px;
    color: white;
    font-size: 16px;
    z-index: 100;
    background-color: #0fc37c;
  }
  .personal-content-user{
    width: 100%;
    height: 250px;
    padding: 70px 20px 20px;
    background-color: #0fc37c;
  }
  .personal-content-user-img{
    width: 100px;
    height: 100px;
    background-color: white;
    float: left;
    margin-right: 20px;
  }
  .personal-content-user-content{
    width: 200px;
    float: left;
  }
  .personal-content-user-content-name{
    text-align: left;
  }
  .personal-content-user-content-music{
    text-align: left;
    margin: 10px 0 20px;
    font-size: 14px;
    color: white;
  }
  .personal-content-user-content-logo{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .personal-content-operation{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .personal-content-operation-item{
    padding: 10px;
    flex-grow: 1;
    color: white;
  }
  .side2-enter-to, .side2-leave-to{
    transition: transform 0.5s
  }
  .side2-enter{
    transform:translate3d(0,100%,0)
  }
  .side2-leave-to{
    transform:translate3d(100%,0,0)
  }
  .personal-content2-icon{
    width: 40px;
    height: 40px;
  }
</style>
