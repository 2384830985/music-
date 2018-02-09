<template>
  <div class="t-header">
    <div class="t-header-mord">
      <i @click="showMenu" class="icon iconfont icon-category iconfont-fo"></i>
    </div>
    <div class="t-header-content">
      <div class="t-header-home">
        <router-link class="t-header-home-item"  tag="div" to="/music">
          <span>
            <i class="icon iconfont icon-service iconfont-red"></i>
          </span>
        </router-link>
        <router-link class="t-header-home-item"  tag="div" to="/home">
          <span>
            <i class="icon iconfont icon-all iconfont-red"></i>
          </span>
        </router-link>
        <router-link class="t-header-home-item"  tag="div" to="/list">
          <span>
            <i class="icon iconfont icon-account iconfont-red"></i>
          </span>
        </router-link>
      </div>
    </div>
    <div class="t-header-search">
      <i class="icon iconfont icon-search iconfont-fo"></i>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
    }
  },
  methods: {
    showMenu () {
      this.$store.commit('showMenu')
    }
  }
}
</script>

<style>
@import "../../../static/icon/iconfont.css";
.t-header{
  position: fixed;
  top:0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #ff9797;
  height: 60px;
  z-index: 98;
}
.t-header-mord{
  flex-grow: 1;
  padding: 16px 0;
  color: #e7e5e2;
}
.iconfont-fo{
  font-size: 25px;
}
.t-header-content{
  flex-grow: 5;
}
.t-header-search{
  flex-grow: 1;
  padding: 16px 0;
  color: #e7e5e2;
}
.t-header-home{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: white;
}
.iconfont-red{
  font-size: 25px;
}
.t-header-home-item{
  padding: 16px 0;
  flex-grow: 1;
}
.router-link-active span .iconfont-red{
  color: red;
}

</style>
