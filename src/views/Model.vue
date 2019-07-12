<template>
  <div class="model">
  	<h2><span>{{manufacturer.toUpperCase()}}&nbsp;</span>{{cars[manufacturer][model].title}} (<a :href="cars[manufacturer][model].wiki">Wiki link</a>)</h2>
  	<gallery :images="cars[manufacturer][model].pictures" :index="index" @close="index = null"></gallery>
  	<div class="photos">
  		<div class="photo">
  			<div class="photo-preview" v-for="(image, imageIndex) in cars[manufacturer][model].pictures":key="imageIndex"@click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '350px', height: '200px', margin: 'auto'}"></div>
  		</div>
  	</div>
  </div>
</template>

<script>
	import Cars from '@/assets/data/cars.js'
	import VueGallery from 'vue-gallery'


	export default {
	  data(){
	    return {
	      "cars": Cars,
	      "manufacturer" : this.$route.params.manufacturer,
	      "model" : this.$route.params.model,
	      "index": null
	    }
	  },
	  components: {
			'gallery': VueGallery
	  }
	}
</script>