<template>
	<span class="radio">	
        <label v-for="val in setvalue">
          <input type="radio" v-model="checked" :name="setname" :value=val[0] />
		  <span :class="['replace', {'replaceChecked' : checked === val[0]}]"></span>
          <span>{{ val[1] }}</span>
        </label>
    </span>
</template>

<script>
export default {
  name: 'radio',
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
	.radio{
	  display:inline-block;overflow:hidden;
	}
	.radio label{
	  float:left;height:22px;line-height:22px;cursor:pointer;position:relative;margin:0 5px;
	}
	.radio input[type="radio"]{
		float:left;width:14px;height:14px;z-index:1;opacity:0;margin:0;cursor:pointer;
	}
	.replace{
		position:absolute;left:0;top:3px;width:14px;height:14px;background:url(../assets/radioNoChecked.png) no-repeat center center;
	}
	.replaceChecked{
		background:url(../assets/radioChecked.png) no-repeat center center;
	}
</style>
