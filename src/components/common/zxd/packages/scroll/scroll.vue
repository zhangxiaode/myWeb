<template>
  <div class="zxd-scroll" @mouseover="sliderOver" @mouseout="sliderOut" :style="{width: bdWidth + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Zxd-scroll',
  data () {
    return {
      bdWidth: 0
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
    this.bdWidth = 0
    this.$slots.default.forEach(element => {
      this.bdWidth += 461
      console.log(element)
    })
  },
  methods: {
    move () {

    },
    sliderOver () {

    },
    sliderOut () {

    }
  }
}
</script>

<style scoped lang="less">
  .zxd-scroll{
    height:100%;
    .scrollItem{
      float:left;height:100%;
    }
    img{
      width:auto;height:100%;
      margin:0 5px;
    }
  }
</style>
