<template>
  <div class="zxd-scroll" @mouseover="move(false)" @mouseout="move(true)" :style="{width: bdWidth + 'px', left: lef + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Zxd-scroll',
  data () {
    return {
      bdWidth: 0,
      realWidth: 0,
      lef: 0,
      timer: ''
    }
  },
  computed: {
    // bdWidth () {
    //   // const wid = 0
    //   // this.$slots.default.forEach(element => {
    //   //   // wid += element.elm.clientWidth
    //   //   console.log(element.elm)
    //   // })
    //   return 10000
    // }
  },
  props: [ 'total', 'scrollData' ],
  mounted () {
    this.getBdWidth()
    this.move(true)
  },
  methods: {
    getBdWidth () {
      setTimeout(() => {
        this.bdWidth = 0
        this.$slots.default.forEach(element => {
          this.bdWidth += element.elm.getBoundingClientRect().width
        })
        this.realWidth = this.bdWidth
        this.bdWidth = this.bdWidth * 2
        var arr = this.scrollData
        arr.map(element => {
          this.scrollData.push(element)
        })
      })
    },
    move (status) {
      if (status) {
        this.timer = setInterval(() => {
          this.lef--
          if (this.lef <= -this.realWidth) {
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

<style scoped lang="less">
  .zxd-scroll{
    position:relative;
    left:0;
    height:100%;
  }
</style>
