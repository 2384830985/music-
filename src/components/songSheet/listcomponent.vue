<template>
<div class="t-listComponent" @click="changeCurrent(songsheet,index+1)">
  <div class="t-listComponent-logo" v-if="sidebar!=songsheet.id">{{index+1}}</div>
  <div class="t-listComponent-logo1" v-if="sidebar==songsheet.id">
    <i class="icon-type1 icon-rank-list">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gou"></use>
      </svg>
    </i>
  </div>
  <div class="t-listComponent-content">
    <div class="t-listComponent-title">{{songsheet.name}}</div>
    <div class="t-listComponent-name">{{songsheet.singer}}</div>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  props: {
    songsheet: Object,
    index: Number
  },
  methods: {
    changeCurrent (res, index) {
      let obj = [{
        id: res.id,
        title: res.name,
        author: res.singer,
        url: res.url,
        pic: res.img_url,
        lrc: 'wwww'
      }]
      this.$store.commit('changeCurrent', obj)
    }
  },
  computed: {
    sidebar () {
      return this.$store.state.sideBar.current[0].id
    }
  }
}
</script>

<style>
  .icon-type{
    display:inline-block;
    width:20px;
    height:20px;
    text-align:center;
  }
  .icon {
    width: 100%; height: 100%;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .t-listComponent-logo{
    position: absolute;
    top: 21px;
    left: 20px;
    font-size: 16px;
    color: #a7b3ab;
  }
  .t-listComponent-logo1{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 21px;
    left: 15px;
    font-size: 16px;
    color: #a7b3ab;
  }
  .t-listComponent{
    position: relative;
    width: 100%;
    padding: 10px 0 0 50px;
  }
  .t-listComponent-content{
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
  }
  .t-listComponent-title{
    text-align: left;
    font-size: 16px;
    color: #666;
  }
  .t-listComponent-name{
    text-align: left;
    color: #babfbc;
    font-size: 16px;
    margin-bottom: 10px;
  }
</style>
