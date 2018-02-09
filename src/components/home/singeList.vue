<template>
  <div class="col-xs-4" :style="{ padding: padding }">
    <div>
      <img class="t-item-logo" style="height: auto" :src="imgurl" alt="">
    </div>
    <div class="t-item-name">{{name}}</div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    name: {
      type: String
    },
    imgurl: {
      type: String
    },
    padding: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  computed: {
  }

}
</script>

<style>
  .t-singList-content{
    display: flex;
    flex-wrap: wrap;
  }
  .t-item-name{
    margin: 4px 0;
    font-size: 12px;
    width: 100%;
    height:34px;
    line-height:17px;
    box-sizing:border-box;
    overflow: hidden;
    color:#333;
    font-weight:400;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
