<template>
  <Swiper ref="swiper" v-if="list.length>0">
    <Slide v-for="(tag,key) in list" :key=key>
      <img class="t-img" :src="tag.img" />
    </Slide>
  </Swiper>
</template>

<script type="text/javascript">
import { Swiper, Slide } from '../../swiper/index.js'
export default {
  data () {
    return {
      list: [
        { img: 'https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360' },
        { img: 'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360' },
        { img: 'https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360' }
      ]
    }
  },
  components: {
    Swiper,
    Slide
  },
  methods: {
    prevSlideClick () {
      this.$refs.swiper.prevSlide()
    },
    nextSlideClick () {
      this.$refs.swiper.nextSlide()
    },
    slideToClick () {
      this.$refs.swiper.slideTo(2)
    }
  }
}
</script>

<style>

</style>
