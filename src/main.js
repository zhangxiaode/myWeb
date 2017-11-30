import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import '_element-ui@1.4.7@element-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(VueResource)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
