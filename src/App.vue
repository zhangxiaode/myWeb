<template>
  <div class="app">
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <a @click="getJson">getJson</a>
  </div>
</template>
<script>
import Ajax from './utils/ajax'
import Parameter from './utils/parameter'
export default {
  name: 'name',
  data () {
    return {
      checked: true,
      a: 1
    }
  },
  created () {
    console.log(Ajax);
  },
  methods: {
    getJson () {
      // Axios.post('/static/json/data.json')
      // .then(function (response) {
      //   alert('success')
      // })
    }
  }
}
</script>
