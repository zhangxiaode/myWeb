<template>
  <div class="Myselect">
    <span class="default" @click = "slide">{{ this.selectData.default }}</span>
    <transition name="open-switch">
      <ul :class="['list', { 'open': show }]">
        <li v-for="value in this.selectData.datas" @click="choose(value)">
          {{ value }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Myselect',
  props: [ 'selectData' ],
  data () {
    return {
      show: false
    }
  },
  methods: {
    slide: function () {
      this.show = !this.show
    },
    choose: function (value) {
      this.show = !this.show
      this.selectData.default = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Myselect{
    position:relative;z-index:9999;display:inline-block;height:30px;line-height:30px;
  }
  .Myselect .default{
    display:inline-block;height:30px;width:auto;border:solid 1px #dadada;padding:0 20px 0 10px;cursor:pointer;background:url(../assets/myselect.png) no-repeat right 5px center;
  }
  .Myselect .list{
    position:absolute;top:34px;left:0;background:#fff;box-sizing:border-box;height:0;padding:0;margin:0;overflow:hidden;border:none;transition:height 0.5s;
  }
  .Myselect .list.open{
    height:180px;
  }
  .Myselect .list li{
    display: list-item;list-style: none;height:30px;cursor:pointer;text-align:left;padding:0 10px;
  }
  .Myselect .list li:hover{
    background:#eee;
  }
</style>
