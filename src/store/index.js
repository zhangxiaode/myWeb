import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false
  },
  mutations: {
    showLoading(state){
      state.loading=true;
    },
    hideLoading(state){
      state.loading=false;
    }
  },
  action: {
    // 测试用
    // reduce(context){
    // }
  }
});
