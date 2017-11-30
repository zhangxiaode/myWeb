<template>
  <span class="checkbox">  
        <label v-for="val in setvalue">
          <input type="checkbox" v-model=val[2] :name="setname" :value=val[0] />
          <span :class="['replace', {'replaceChecked' : val[2]}]"></span>
          <span>{{ val[1] }}</span>
        </label>
    </span>
</template>

<script>
export default {
  name: 'checkbox',
  props: [ 'setname', 'setvalue' ],
  data () {
    return {
      checked: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .checkbox{
    display:inline-block;overflow:hidden;
  }
  .checkbox label{
    float:left;height:22px;line-height:22px;cursor:pointer;position:relative;margin:0 5px;
  }
  .checkbox input[type="checkbox"]{
    float:left;width:14px;height:14px;z-index:1;opacity:0;margin:0 3px 0 0;cursor:pointer;
  }
  .replace{
    position:absolute;left:0;top:3px;width:14px;height:14px;background:url(../assets/checkboxNoChecked.png) no-repeat center center;
  }
  .replaceChecked{
    background:url(../assets/checkboxChecked.png) no-repeat center center;
  }
</style>
