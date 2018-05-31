<template>
  <div :class="['zxd-dialog', {'show-dialog': visible}]">
    <div class="zxd-dialog-mask" v-if="modal"></div>
    <div class="zxd-dialog-wrap" @click.self="close">
      <div class="zxd-dialog-modal" :style="{width: width}">
        <div class="zxd-dialog-title">
          <span>{{ this.title }}</span>
        </div>
        <div class="zxd-dialog-body">
          <slot></slot>
        </div>
        <div class="zxd-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Zxd-dialog',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: 'this is title'
    },
    visible: Boolean,
    modal: Boolean,
    onOk: Function,
    onCancel: Function,
    width: {
      type: String,
      default: 'auto'
    }
  },
  watch: {
    visible () {
      console.log('visible change')
    }
  },
  mounted () {
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped lang="less">
.zxd-dialog{
  display:none;
  .zxd-dialog-wrap{
    width:0;height:0;
  }
  &.show-dialog{
    display:block;
    .zxd-dialog-wrap{
      width:100%;height:100%;
    }
  }
}
.zxd-dialog-mask{
  position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;
  background:rgba(0,0,0,0.5);
}
.zxd-dialog-wrap{
  display:flex;justify-content: center;align-items: center;
  position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;
  overflow:hidden;
  transition:all .3s;
}
.zxd-dialog-modal{
  border-radius:4px;overflow:hidden;background:#fff;
  position: relative;z-index:1001;
  margin:20px;
  .zxd-dialog-title{
    padding:16px 24px;
  }
  .zxd-dialog-body{
    padding:24px;
  }
  .zxd-dialog-footer{
    padding:10px 16px;
    border-top:solid 1px #e8e8e8;
    text-align:right;
  }
}
</style>
