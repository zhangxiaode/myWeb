<template>
  <div class="header">
    <div class="logo">
      <a href="javascript:;">张孝德个人网站</a>
    </div>
    <div class="nav">
      <router-link :key="index" v-for="(item,index) in navList" :to="item.toLink">
        <img :src="item.icon" alt="">
        <span>{{ item.value }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navList: [
        {
          icon: require('@/assets/home.svg'),
          name: 'homePage',
          value: '首页',
          toLink: '/homePage'
        },
        {
          icon: require('@/assets/home.svg'),
          name: 'myResume',
          value: '个人信息',
          toLink: '/myResume'
        },
        {
          icon: require('@/assets/home.svg'),
          name: 'myAlbum',
          value: '个人相册',
          toLink: '/myAlbum'
        },
        {
          icon: require('@/assets/home.svg'),
          name: 'qqSpace',
          value: 'QQ空间',
          toLink: '/qqSpace'
        },
        {
          icon: require('@/assets/home.svg'),
          name: 'myBlog',
          value: '新浪博客',
          toLink: '/myBlog'
        },
        {
          icon: require('@/assets/home.svg'),
          name: 'myArtical',
          value: '技术文章',
          toLink: '/myArtical'
        },
        {
          icon: require('@/assets/home.svg'),
          name: 'myProject',
          value: '工程项目',
          toLink: '/myProject'
        },
        {
          icon: require('@/assets/home.svg'),
          name: 'myForum',
          value: '论坛',
          toLink: '/myForum'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
  position:fixed;top:160px;width:125px;
  color:#fff;
  .logo{
    height:50px;
    a{
      background:url(../assets/logo.png) no-repeat center center;background-size:auto 40px;
      display:block;height:50px;
      text-indent:-9999em;
    }
  }
  .nav{
    text-align:center;overflow:hidden;
    a{
      display:flex; justify-content:left; align-items: center; height:30px;line-height:30px;
      border-radius:5px;margin:5px 0;
      span{
        color:#fff;font-size:16px;font-weight:bold;
      }
      img{
        width:20px;height:20px;padding:5px;
      }
      &.router-link-active{
        background:rgba(255,255,255,0.3);
      }
      &:hover{
        text-decoration:none;background:rgba(255,255,255,0.3);
      }
    }
  }
}
</style>
