<template>
  <div class="model">
    <h1>Model page</h1>
  	<h2>This page about <span><router-link :to="`/cars/${manufacturer}`">{{manufacturer}}</router-link>&nbsp;</span>{{cars[manufacturer][model].title}} car</h2>
  	<div class="photos">
  		<p v-for="img in cars[manufacturer][model].pictures">{{img}}</p>
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