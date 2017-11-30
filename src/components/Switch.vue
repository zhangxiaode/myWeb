<template>
  <span class="switch">
    <span class="switchBg" @click="openfun">
      <span :class="['btnBg', { 'open': open }]">
        <span class="btn"></span>
      </span> 
    </span>
  </span>
</template>

<script>
export default {
  name: 'switch',
  data () {
    return {
      open: false
    }
  },
  methods: {
    openfun: function () {
      this.open = !this.open
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span{
    display:inline-block;
  }
  .switch{
    position:relative;
  }
  .switchBg{
    float:left;width:80px;height:32px;border-radius:16px;background:#ddd;cursor:pointer;
  }
  .btnBg{
    background:#4cd864;position:absolute;top:0;left:0;z-index:1;height:32px;width:30px;border-radius:16px;  
    transition:width 0.5s;
  }
  .btnBg.open{
    width:80px;
  }
  .btn{
    float:right;width:30px;height:30px;border-radius:15px;background:#fff;border:solid 1px #ccc;box-shadow:0 0 3px 0 #ccc;
  }
</style>

