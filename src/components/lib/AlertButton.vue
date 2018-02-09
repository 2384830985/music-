<template>
  <div class="personal">
    <transition name="side1">
      <div class="personal-content1" v-show="isButtonShow">
        <div class="t-Alertbu">{{isButtonShowList.name}}</div>
        <v-form-list :name="'删除'" :length="isButtonShowList.length" :index="isButtonShowList.index"></v-form-list>
      </div>
    </transition>
    <transition name="fade">
      <div class="personal-mask" v-show="isButtonShow" @click="hideMenu">
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
import Formlist from './formlist.vue'
export default({
  computed: {
    isButtonShow () {
      return this.$store.state.buttonAlert.isButtonShow
    },
    isButtonShowList () {
      return this.$store.state.buttonAlert.isButtonShowList
    }
  },
  methods: {
    hideMenu () {
      this.$store.commit('hideisButtonShow')
    }
  },
  components: {
    'v-form-list': Formlist
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
  .personal-content1{
    padding-bottom: 20px;
    position:fixed;
    left:0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index:102;
    background-color: #fff
  }
  .side1-enter-to, .side1-leave-to{
    transition: transform 0.5s
  }
  .side1-enter, .side1-leave-to{
    transform:translate3d(0,100%,0)
  }
  .fade-enter-to, .fade-leave-to{
    transition: opacity 0.3s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
  .t-Alertbu{
    width: 100%;
    font-size: 12px;
    padding: 20px 0 0 10px;
    text-align: left;
  }
</style>
