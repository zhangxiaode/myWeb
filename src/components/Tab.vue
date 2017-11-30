<template>
  <div class="tab">
    <tab-hd></tab-hd>
    <router-view></router-view>
  </div>
</template>
<script>
import tabHd from './TabHd.vue'

export default {
  components: { tabHd }
}
</script>
