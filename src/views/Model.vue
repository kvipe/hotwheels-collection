<template>
  <div class="model">
  	<h2><span><router-link :to="`/cars/${manufacturer}`">{{manufacturer}}</router-link>&nbsp;</span>{{cars[manufacturer][model].title}}</h2>
  	<div class="photos">
  		<img v-for="img in cars[manufacturer][model].pictures" :src="img">
  	</div>
  </div>
</template>

<script>
	import Cars from '@/assets/data/cars.js'

	export default {
	  data(){
	    return {
	      "cars": Cars,
	      "manufacturer" : this.$route.params.manufacturer,
	      "model" : this.$route.params.model
	    }
	  }
	}
</script>