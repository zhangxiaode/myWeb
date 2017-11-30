<template>
  <div class="app">
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <a @click="getJson">getJson</a>
  </div>
</template>
<script>
export default {
  name: 'name',
  data () {
    return {
      checked: true,
      a: 1
    }
  },
  methods: {
    getJson () {
      this.$http.get('/static/json/data.json', [])
      .then((option) => {
        alert('success')
      }, (option) => {
        alert('error')
      })
    }
  }
}
</script>
