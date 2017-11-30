<template>
  <div id="app">
  	<router-link :key="value.index" :to="value.to || '/'" v-for="value in tools">{{ value.text }}</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      tools: [
        { text: 'tabHd1', to: '' },
        { text: 'tabHd2', to: '/components/Tab2' }
      ]
    }
  }
}
</script>

<style>
#app {
  
}
</style>
