<template>
  <div class="banner">
    <div class="bannerScroll" ref="bannerScroll">
      <!-- <Zxd-scroll :scrollData="scrollData"></Zxd-scroll> -->
      <div class="scrollWrap" @mouseover="move(false)" @mouseout="move(true)" :style="{width: wrapWidth + 'px', left: lef + 'px'}">
        <div class="scrollItem" v-for="(item,index) in newScrollData" :key="index" ref="scrollItem">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      scrollData: [
        require('@/assets/slideImg5.jpg'),
        require('@/assets/slideImg5.jpg'),
        require('@/assets/slideImg5.jpg'),
        require('@/assets/slideImg5.jpg'),
        require('@/assets/slideImg5.jpg'),
        require('@/assets/slideImg5.jpg'),
        require('@/assets/slideImg5.jpg'),
        require('@/assets/slideImg5.jpg'),
        require('@/assets/slideImg5.jpg'),
        require('@/assets/slideImg5.jpg')
      ],
      newScrollData: [],
      wrapWidth: 0,
      lef: 0,
      timer: ''
    }
  },
  computed: {
    total () {
      return this.newScrollData.length
    },
    scrollWidth () {
      return this.$refs.bannerScroll.offsetWidth
    }
  },
  created () {
    this.newScrollData = this.scrollData
  },
  mounted () {
    setTimeout(() => {
      var wrapWidth = 0
      this.$refs.scrollItem.forEach(element => {
        wrapWidth += element.offsetWidth
      })
      this.wrapWidth = wrapWidth
      if (this.wrapWidth > this.scrollWidth) {
        this.initDate(true)
        this.wrapWidth = 2 * wrapWidth
        this.move(true)
      } else {
        this.initDate(false)
      }
    })
  },
  methods: {
    initDate (status) {
      var newData = this.scrollData
      if (status) {
        this.scrollData.map(element => {
          newData.push(element)
        })
      }
      this.newScrollData = newData
    },
    move (status) {
      if (status) {
        this.timer = setInterval(() => {
          this.lef--
          if (this.lef <= -this.wrapWidth / 2) {
            this.lef = 0
          }
        }, 30)
      } else {
        clearInterval(this.timer)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .banner{
    height:150px;overflow:hidden;
    background:url(../assets/bannerBg.png) repeat-x center center;
    background-size:auto 150px;
    .bannerScroll{
      height: 114px; margin:18px 0;
      .scrollWrap{
        height:100%;white-space: nowrap;
        position:relative;left:0;
        .scrollItem{
          display:inline-block;height:100%;
        }
        img{
          width:auto;height:100%;
          margin:0 5px;
        }
      }
    }
  }
</style>
