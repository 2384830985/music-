<template>
  <div class="t-personality">
    <v-swiper></v-swiper>
    <div class="recommend-type">
      <div class="div-type">
        <i class="icon-type icon-fm">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-hulu"></use>
          </svg>
        </i>
        <p class="title">私人FM</p>
      </div>
      <div class="div-type">
        <i class="icon-type icon-date">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fudai"></use>
          </svg>
        </i>
        <p class="title">每日听歌推荐</p>
      </div>
      <div class="div-type">
        <i class="icon-type icon-rank-list">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gou"></use>
          </svg>
        </i>
        <p class="title">云音乐热歌榜</p>
      </div>
    </div>
    <v-recommend-title></v-recommend-title>
    <div class="t-item-go">
      <div class="t-singList-content">
        <v-sing v-if="items"
                :key="sheet.id"
                v-for="sheet in items"
                :name="sheet.name"
                :imgurl="sheet.info[0].img_url"
                :padding="sheet.padding"
        ></v-sing>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Swiper from './swiper/swiper.vue'
import Sing from './singeList.vue'
import recommendTitle from '../lib/recommendTitle.vue'
import '../../../static/icon/iconfont.js'
export default {
  data () {
    return {
    }
  },
  computed: {
    items () {
      return this.$store.getters.getAllInfo != '' ? this.$store.getters.getAllInfo.findmusic.reconmmend.recommendMinSheets : ''
    }
  },
  components: {
    'v-swiper': Swiper,
    'v-sing': Sing,
    'v-recommend-title': recommendTitle
  }
}
</script>

<style>
  .icon {
    width: 100%; height: 100%;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .t-personality{
    margin-top: 36px;
  }
  .t-item-go{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 2px;
  }
  .t-item{
    flex-grow: 1;
  }
  .t-item-logo{
    width: 100%;
    height: 100px;
  }
  .t-img{
    width: 100%;
    height: 100%;
  }
  .recommend-type{
    width:100%;
    height:90px;
    display:flex;
    align-items:center;
  }
  .div-type{
    flex:1;
    height:100%;
    width:33.333333%;
    font-size:0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0 10px;
  }
  .icon-type{
    display:inline-block;
    font-size:32px;
    width:50px;
    height:50px;
    line-height:50px;
    text-align:center;
    border-radius:50%;
  }
  .title{
    font-size:12px;
    font-weight:400;
    margin:0;
    margin-top:8px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    width:100%;
    text-align:center;
  }
</style>
