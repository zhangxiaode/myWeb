import Vue from 'vue'
import Router from 'vue-router'
import Tabvue from '@components/tab.vue'
import Tab1 from '@/components/Tab1.vue'
import Tab2 from '@/components/Tab2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    tabRouter
  ]
})
