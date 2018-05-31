<template>
  <div id="app">
    <!-- <div class="bodybg">
      <canvas id="bodybg" :width="bodyBgWidth" :height="bodyBgHeight"></canvas>
      <canvas id="bodybg2" :width="bodyBgWidth" :height="bodyBgHeight"></canvas>
    </div> -->
    <div class="wrap">
      <!-- <Banner></Banner> -->
      <!-- <SiteNav></SiteNav> -->
      <!-- <router-view></router-view> -->
      <!-- <CopyRight></CopyRight> -->
      <Zxd-button @click="dialogVisible = true">dialog</Zxd-button>
      <Zxd-dialog
        :modal="true"
        title="Basic Modal"
        width="30%"
        :visible.sync="dialogVisible"
        :onOk="ok"
        :onCancel="cancel"
      >
        <span>dialog content</span>
        <span slot="footer" class="dialog-footer">
          <Zxd-button @click="dialogVisible = false">取 消</Zxd-button>
          <Zxd-button type="primary" @click="dialogVisible = false">确 定</Zxd-button>
        </span>
      </Zxd-dialog>
    </div>
    <Loading v-if="showLoading"></Loading>
  </div>
</template>

<script>
// import ajax from '@/utils/ajax'
import Loading from '@/components/common/loading'
import Banner from '@/components/Banner'
import SiteNav from '@/components/siteNav'
import CopyRight from '@/components/copyRight'
export default {
  name: 'App',
  components: {Loading, Banner, SiteNav, CopyRight},
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    showLoading () {
      return this.$store.state.loading
    },
    bodyBgWidth () {
      return document.body.clientWidth
    },
    bodyBgHeight () {
      return document.body.clientHeight
    }
  },
  created () {
    // 测试ajax
    // ajax.get('/borrow/ordersInfo/getOrderList', {})
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  },
  mounted () {
    // this.drawBg()
  },
  methods: {
    ok () {
      console.log('ok')
    },
    cancel () {
      console.log('cancel')
    },
    drawBg () {
      const draw = {
        ctx: document.getElementById('bodybg').getContext('2d'), // 初始化画板
        ctx2: document.getElementById('bodybg2').getContext('2d'), // 初始化画板
        drawCircle: () => {}, // 绘制渐变的圆
        drawMoon: () => {}, // 绘制月亮
        drawMeteor: () => {},
        init: () => {} // 初始化
      }
      draw.drawCircle = (x, y, r, startColor, endColor) => {
        draw.ctx.save()
        var grd = draw.ctx.createRadialGradient(x, y, 0, x, y, r)
        grd.addColorStop(0, startColor)
        grd.addColorStop(0.2, startColor)
        grd.addColorStop(1, endColor)
        draw.ctx.fillStyle = grd
        draw.ctx.shadowBlur = r // 设置阴影的宽度
        draw.ctx.shadowOffsetX = 0 // 设置阴影沿X轴的偏移距离，为正时向右偏移
        draw.ctx.shadowOffsetY = 0 // 设置阴影沿Y轴的偏移距离，为正时向下偏移
        draw.ctx.shadowColor = startColor // 设置阴影的颜色
        draw.ctx.beginPath()
        draw.ctx.arc(x, y, r, 0, 2 * Math.PI, false)
        draw.ctx.closePath()
        draw.ctx.fill()
        draw.ctx.restore()

        draw.ctx.save()
        draw.ctx.beginPath()
        grd = draw.ctx.createLinearGradient(x, y, x + 4 * r, y)
        grd.addColorStop(0, startColor)
        grd.addColorStop(1, endColor)
        draw.ctx.strokeStyle = grd
        draw.ctx.lineWidth = r / 4
        draw.ctx.moveTo(x, y)
        draw.ctx.lineTo(x + 4 * r, y)
        draw.ctx.stroke()
        draw.ctx.restore()

        draw.ctx.save()
        draw.ctx.beginPath()
        grd = draw.ctx.createLinearGradient(x, y, x - 4 * r, y)
        grd.addColorStop(0, startColor)
        grd.addColorStop(1, endColor)
        draw.ctx.strokeStyle = grd
        draw.ctx.lineWidth = r / 4
        draw.ctx.moveTo(x, y)
        draw.ctx.lineTo(x - 4 * r, y)
        draw.ctx.stroke()
        draw.ctx.restore()

        draw.ctx.save()
        draw.ctx.beginPath()
        grd = draw.ctx.createLinearGradient(x, y, x, y + 4 * r)
        grd.addColorStop(0, startColor)
        grd.addColorStop(1, endColor)
        draw.ctx.strokeStyle = grd
        draw.ctx.lineWidth = r / 4
        draw.ctx.moveTo(x, y)
        draw.ctx.lineTo(x, y + 4 * r)
        draw.ctx.stroke()
        draw.ctx.restore()

        draw.ctx.save()
        draw.ctx.beginPath()
        grd = draw.ctx.createLinearGradient(x, y, x, y - 3 * r)
        grd.addColorStop(0, startColor)
        grd.addColorStop(1, endColor)
        draw.ctx.strokeStyle = grd
        draw.ctx.lineWidth = r / 4
        draw.ctx.moveTo(x, y)
        draw.ctx.lineTo(x, y - 4 * r)
        draw.ctx.stroke()
        draw.ctx.restore()
      }
      draw.drawMoon = () => {
        draw.ctx.save()
        let grd = draw.ctx.createLinearGradient(100, 140, 160, 160)
        grd.addColorStop(0, '#fff')
        grd.addColorStop(1, 'transparent')
        draw.ctx.fillStyle = grd
        draw.ctx.beginPath()
        draw.ctx.arc(150, 150, 50, 0, 2 * Math.PI, false)
        draw.ctx.closePath()
        draw.ctx.fill()
        draw.ctx.restore()
      }
      draw.drawMeteor = (meteorY, meteorWidth, lineWidth, meteorX) => {
        draw.ctx2.save()
        let grd = draw.ctx2.createLinearGradient(document.body.clientWidth + meteorWidth - meteorX, meteorY, document.body.clientWidth - meteorX, meteorY)
        grd.addColorStop(0, 'transparent')
        grd.addColorStop(1, '#fff')
        draw.ctx2.strokeStyle = grd
        draw.ctx2.lineWidth = lineWidth
        draw.ctx2.beginPath()
        draw.ctx2.moveTo(document.body.clientWidth + meteorWidth - meteorX, meteorY)
        draw.ctx2.lineTo(document.body.clientWidth - meteorX, meteorY)
        draw.ctx2.closePath()
        draw.ctx2.stroke()
        draw.ctx2.restore()
      }
      draw.init = () => {
        const stars = []
        for (var i = 0; i < 500; i++) {
          stars.push({x: Math.random() * document.body.clientWidth, y: Math.random() * document.body.clientHeight, r: 4 * Math.random()})
        }
        stars.forEach(element => {
          draw.drawCircle(element.x, element.y, element.r, '#fff', 'transparent')
        })
        draw.drawMoon()
        let meteors = []
        for (var j = 0; j < 5; j++) {
          meteors.push({meteorY: Math.random() * document.body.clientHeight, meteorWidth: Math.random() * 150 + 10, lineWidth: Math.random() * 2, meteorX: -1000 * Math.random()})
        }
        setInterval(() => {
          draw.ctx2.clearRect(0, 0, document.body.clientWidth, document.body.clientHeight)
          meteors.forEach((element, index) => {
            draw.drawMeteor(element.meteorY, element.meteorWidth, element.lineWidth, element.meteorX)
            element.meteorX += 1.5
            if (element.meteorX > document.body.clientWidth + 160) {
              meteors.splice(index, 1)
              meteors.push({meteorY: Math.random() * document.body.clientHeight, meteorWidth: Math.random() * 150 + 10, lineWidth: Math.random() * 2, meteorX: -1000 * Math.random()})
            }
          })
        }, 5)
      }
      draw.init()
    }
  }
}
</script>

<style lang="less">
#app {
  position:relative;width:100%;height:100%;
  overflow-y: auto;overflow-x: hidden;
  .bodybg{
    position: fixed;top:0;left:0;width:100%;height:100%;
    background:#000;overflow:hidden;
    #bodybg,#bodybg2{
      position: absolute;top:0;left:0;
    }
  }
  .wrap{
    position:relative;z-index:1;
  }
}
</style>
