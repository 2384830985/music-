<template>
  <div class="personal">
    <transition name="side">
      <div class="personal-content" v-show="isMenuShow">
        我是个人中心敬请期待
      </div>
    </transition>
    <transition name="fade">
      <div class="personal-mask" v-show="isMenuShow" @click="hideMenu">
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
export default({
  computed: {
    isMenuShow () {
      return this.$store.state.isMenuShow
    }
  },
  methods: {
    hideMenu () {
      this.$store.commit('hideMenu')
    }
  }
})
</script>

<style>
  .personal-mask{
    position:fixed;
    top:0;
    bottom: 0;
    left:0;
    right:0;
    opacity: 0.3;
    width:100%;
    height: 100%;
    z-index:101;
    background:rgba(0,0,0,0.5)
  }
  .personal-content{
    position:fixed;
    top:0;
    bottom: 0;
    left:0;
    right:0;
    width: 80%;
    overflow-y:auto;
    z-index:102;
    height: 100%;
    background-color: #fff
  }
  .side-enter-to, .side-leave-to{
    transition: transform 0.5s
  }
  .side-enter, .side-leave-to{
    transform:translate3d(-100%,0,0)
  }
  .fade-enter-to, .fade-leave-to{
    transition: opacity 0.3s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
</style>
