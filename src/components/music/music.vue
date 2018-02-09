<template>
<div>
  <v-form-list v-for="(item, index) in items" :key="index"
    :name="item.name" :length="item.length" :index="index" ></v-form-list>
  <v-song-sheet></v-song-sheet>
</div>
</template>

<script type="text/javascript">
import Formlist from '../lib/formlist.vue'
import SongSheet from '../lib/songSheet.vue'
export default {
  data () {
    return {
      items: [
        {
          name: '我的音乐',
          length: '22'
        },
        {
          name: '最近播放',
          length: '18'
        },
        {
          name: '我的电台',
          length: '1'
        },
        {
          name: '我的收藏',
          length: '2'
        }
      ]
    }
  },
  components: {
    'v-form-list': Formlist,
    'v-song-sheet': SongSheet
  }
}
</script>

<style>
</style>
