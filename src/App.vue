<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Transition></Transition>
    <Loading v-if="showLoading"></Loading> 
    <a href="javascript:;" @click="handleClick">点击</a>
  </div>
</template>

<script>
import ajax from "@/utils/ajax"
import Loading from "@/components/common/loading"
export default {
  name: 'App',
  data(){
    return {
      a: 1
    }
  },
  computed:{
    showLoading(){
      return this.$store.state.loading
    }
  },
  components:{Loading},
  created(){
    // 测试ajax
    ajax.get('/borrow/ordersInfo/getOrderList',{})
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      // console.log(err);
    })
  },
  methods:{
    handleClick(){
      this.a++;
      this.$message.error("123");
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
