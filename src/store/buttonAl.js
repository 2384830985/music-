/**
 * Created by Administrator on 2018/2/7.
 */
const buttonAlert = {
  state: {
    isButtonShow: false,
    isButtonShowList: {
      name: '汤金金金鑫',
      length: '123',
      id: '',
      index: 1
    }
  },
  mutations: {
    // 方法
    hideisButtonShow (state) {
      state.isButtonShow = false
    },
    showisButtonShow (state, res) {
      state.isButtonShowList.name = res
      state.isButtonShow = true
    }
  },
  actions: {
    // 异步
  },
  getters: {
    // 暴露出数据
  }
}
export default buttonAlert
