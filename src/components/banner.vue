<template>
  <div class="banner">
    <div class="bannerScroll">
      <Zxd-scroll :total="scrollData.length">
        <div class="scrollItem" v-for="(item,index) in scrollData" :key="index">
          <img :src="item" alt="">
        </div>
      </Zxd-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      scrollData: [
        require('@/assets/slideImg1.jpg'),
        require('@/assets/slideImg1.jpg'),
        require('@/assets/slideImg1.jpg'),
        require('@/assets/slideImg1.jpg'),
        require('@/assets/slideImg1.jpg')
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .banner{
    height:300px;overflow:hidden;
    background:url(../assets/bannerBg.png) repeat-x center center;
    .bannerScroll{
      height: 228px;
      margin:36px 0;
      // background:rgba(38,41,43,0.9);
    }
  }
</style>
