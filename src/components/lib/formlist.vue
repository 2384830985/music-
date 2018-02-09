<template>
  <div style="position: relative">
    <div class="t-formList-icon">
      <i class="icon-rank-list ">
        <svg class="icon" aria-hidden="true">
          <use v-if="index==0" xlink:href="#icon-tanghulu"></use>
          <use v-else-if="index==1" xlink:href="#icon-jiaozi"></use>
          <use v-else-if="index==2" xlink:href="#icon-hulu"></use>
          <use v-else-if="index==3" xlink:href="#icon-qianbao"></use>
        </svg>
      </i>
    </div>
    <div class="t-formList-name" :class="{'border-b-f0': index!=3}">
      {{name}}<span class="t-formList-number" v-if="length!=123">&nbsp;&nbsp;({{length}})</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    length: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.t-formList-name{
  text-align: left;
  width: 80%;
  font-size: 16px;
  margin-left: 15%;
  padding: 10px 0 10px;
}
.border-b-f0{
  border-bottom: 1px solid #f0f0f0;
}
.t-formList-number{
  color: #babfbc;
  font-size: 12px;
}
.t-formList-icon{
  width: 25px;
  height: 25px;
  position: absolute;
  left: 10px;
  top: 10px;
}
.icon {
  width: 100%; height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
