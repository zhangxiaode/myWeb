import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/view/homePage'
import MyResume from '@/view/myResume'
import MyAlbum from '@/view/myAlbum'
import QqSpace from '@/view/qqSpace'
import MyBlog from '@/view/myBlog'
import MyArtical from '@/view/myArtical'
import MyProject from '@/view/myProject'
import MyForum from '@/view/myForum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/myResume',
      name: 'myResume',
      component: MyResume
    },
    {
      path: '/myAlbum',
      name: 'myAlbum',
      component: MyAlbum
    },
    {
      path: '/qqSpace',
      name: 'qqSpace',
      component: QqSpace
    },
    {
      path: '/myBlog',
      name: 'myBlog',
      component: MyBlog
    },
    {
      path: '/myArtical',
      name: 'myArtical',
      component: MyArtical
    },
    {
      path: '/myProject',
      name: 'myProject',
      component: MyProject
    },
    {
      path: '/myForum',
      name: 'myForum',
      component: MyForum
    }
  ]
})
