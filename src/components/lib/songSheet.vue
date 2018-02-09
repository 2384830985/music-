<template>
<div>
  <div v-for="(item, index) in items" :key="index">
    <div class="t-songSheet-title">{{item.name}}&nbsp;{{item.count}}</div>
    <v-sing-list-go v-for="ite in item.detail" :key="ite.id" :ite="ite"></v-sing-list-go>
  </div>
</div>
</template>

<script type="text/javascript">
import VSingListGo from '../lib/singlistgo.vue'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    items () {
      return this.$store.getters.getmusic != '' ? this.$store.getters.getmusic.sheets : ''
    }
  },
  components: {
    VSingListGo,
    'v-sing-list-go': VSingListGo
  }
}
</script>

<style>
.t-songSheet-title{
  text-align: left;
  width: 100%;
  font-size: 12px;
  color: #babfbc;
  background-color: #f0f0f0;
  padding: 8px 20px;
  line-height: 1;
}
</style>
