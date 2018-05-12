<template>
  <div class="header">
    <div class="logo">
      <a href="javascript:;">张孝德个人网站</a>
    </div>
    <div class="nav">
      <router-link :key="index" v-for="(item,index) in navList" :to="item.toLink">{{ item.value }}</router-link>
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
          name: 'homePage',
          value: '首页',
          toLink: '/homePage'
        },
        {
          name: 'myResume',
          value: '个人信息',
          toLink: '/myResume'
        },
        {
          name: 'myAlbum',
          value: '个人相册',
          toLink: '/myAlbum'
        },
        {
          name: 'qqSpace',
          value: 'QQ空间',
          toLink: '/qqSpace'
        },
        {
          name: 'myBlog',
          value: '新浪博客',
          toLink: '/myBlog'
        },
        {
          name: 'myArtical',
          value: '技术文章',
          toLink: '/myArtical'
        },
        {
          name: 'myProject',
          value: '工程项目',
          toLink: '/myProject'
        },
        {
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
  height:50px;color:#fff;position:relative;
  .logo{
    position:absolute;left:0;top:0;height:50px;width:50px;
    a{
      background:url(../assets/logo.png) no-repeat center center;background-size:40px;
      display:block;height:50px;
      text-indent:-9999em;
    }
  }
  .nav{
    height:50px;text-align:center;
    a{
      display:inline-block;height:30px;line-height:30px;
      color:#fff;font-size:16px;font-weight:bold;
      margin:10px 0;padding:0 20px;
      border-radius:5px;
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
