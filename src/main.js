// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/style/reset.less'
import '@/style/common.less'
import '@/style/main.less'

import zxd from './components/common/zxd/index' // 加载公共类组件
import './components/common/zxd/common.less' // 加载公共类组件样式

Vue.config.productionTip = false
Vue.use(zxd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  mounted(){
    this.$message.info("123");
  }, 
  template: '<App/>'
})
