<template>
<div class="t-singlisigo-list">
  <div>
    <div class="content" @click="showissongsheetShowShow(ite.info, ite)">
      <img class="sheetimg" :src="ite.info[0].img_url" alt="">
      <div class="detail">
        <p class="t-xx-name">{{ite.name}}</p>
        <p class="t-xx-count">{{ite.count}}首歌曲</p>
        <i class="setting icon-list-circle1" @click.stop="buAlert(ite.name)">更多</i>
        <p class="border-1px"></p>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
    }
  },
  props: {
    ite: Object
  },
  methods: {
    buAlert (name) {
      this.$store.commit('showisButtonShow', name)
    },
    showissongsheetShowShow (res, ite) {
      this.$store.commit('changeName1', ite.name)
      this.$store.commit('changeUser', ite.user)
      this.$store.commit('showissongsheetShowShow', res)
    }
  },
  computed: {
    items () {
      return this.$store.getters.getAllInfo
    }
  }
}
</script>

<style>
  .t-singlisigo-list{
    width: 100%;
    padding: 4px;
  }
  .content{
    height:60px;
    width:100%;
    box-sizing:border-box;
    position:relative;
    display:flex;
  }
  .content:active{
    background: #e7e5e2
  }
  .sheetimg{
    margin:5px;
    width:50px;
    height:50px;
    flex:0 0 50px;
  }
  .detail{
    height:60px;
    padding-left:5px;
    flex:1 1 auto;
    box-sizing:border-box;
    position:relative;
  }
  .t-xx-name,.t-xx-count{
    width:80%;
    text-align: left;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    margin:0;
    height:25px;
    line-height:25px;
  }
  .t-xx-name{
    margin-top:5px;
    color:#333;
    font-size:14px;
  }
  .t-xx-count{
    margin-bottom:1px;
    font-weight:400;
    font-size:12px;
    color:#666;
  }
  .border-1px{
    margin:0;
    border-bottom: 1px solid #babfbc;
  }
  .setting{
    position:absolute;
    right:5px;
    width:36px;
    height:36px;
    line-height:36px;
    text-align:center;
    top:50%;
    color: #babfbc;
    transform:translate3d(0,-50%,0)
  }
  .setting:active{
    background: #e7e5e2
  }
  .icon-list-circle1{
    font-size: 12px;
  }
</style>
