import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  // {
  //   path:'/registerLink',
  //   component:registerLink,
  //   name:"registerLink"
  // },
  // homePage, loan, raiders, mine
]
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: new VueRouter({ routes }),
  store: new Vuex.Store({
    state: {},
    mutations: {}
  }),
  template: '<App />',
  components: { App }
})
