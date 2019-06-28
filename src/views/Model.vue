<template>
  <div class="model">
  	<h2><span><router-link :to="`/cars/${manufacturer}`">{{manufacturer}}</router-link>&nbsp;</span>{{cars[manufacturer][model].title}}</h2>
  	<div class="photos">
  		<div class="photo">
  			<img v-for="img in cars[manufacturer][model].pictures" v-gallery:photos :src="img">
  		</div>
  	</div>
  </div>
</template>

<script>
	import Vue from 'vue'
	import Cars from '@/assets/data/cars.js'
	import gallery from 'img-vuer'
	Vue.use(gallery, {
	  swipeThreshold: 150, // default 100 ,new in 0.12.0
	  isIndexShow: true, // show image index
	  useCloseButton: false, // trigger gallery close with only close button
	})

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