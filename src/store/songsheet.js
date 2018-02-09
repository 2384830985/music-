/**
 * Created by Administrator on 2018/2/8.
 */
const songsheet = {
  state: {
    issongsheetShow: false, // 判断是否显示歌单
    songsheet: {} // 歌单数据
  },
  mutations: {
    // 方法
    hideissongsheetShowShow (state) {
      state.issongsheetShow = false
    },
    showissongsheetShowShow (state, res) {
      state.issongsheetShow = true
      state.songsheet = res
    }
  },
  actions: {
    // 异步
  },
  getters: {
    // 暴露出数据
    getSongsheet: state => state.songsheet ? state.songsheet : ''
  }
}
export default songsheet
