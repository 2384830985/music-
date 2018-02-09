<template>
  <div>
    <div class="t-home">
      <router-link tag="div" class="t-home-item"  to="/home/personality">
        <span class="personality">个性推荐</span>
      </router-link>
      <router-link tag="div" class="t-home-item"  to="/home/song">
        <span class="personality">歌单</span>
      </router-link>
      <router-link tag="div" class="t-home-item"  to="/home/station">
        <span class="personality">电台</span>
      </router-link>
      <router-link tag="div" class="t-home-item"  to="/home/ranking">
        <span class="personality">排行榜</span>
      </router-link>
    </div>
    <div style="margin-top: 30px">
      <router-view></router-view>
    </div>

  </div>

</template>

<script type="text/javascript">
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
  .t-home{
    position: fixed;
    padding-top: 10px;
    top:0;
    left: 0;
    margin-top: 60px;
    width: 100%;
    display: flex;
    height: 36px;
    z-index: 100;
    background-color: white;
  }
  .t-home-item{
    flex-grow: 1;
    font-size: 14px;
  }
  .personality{
    padding: 6px;
    border-bottom: 2px solid white;
  }
  .router-link-active .personality{
    color: red;
    border-bottom: 2px solid red;
  }
</style>
