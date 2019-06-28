<template>
  <div class="model">
    <h2>I have the following {{manufacturer}} models:</h2>
    <ul>
      <li v-for="(value, key) in cars[manufacturer]"><router-link :to="`/cars/${manufacturer}/${key}`" tag="a">{{value.title}}</router-link></li>
    </ul>
  </div>
</template>

<script>
	import Cars from '@/assets/data/cars.js'
	
	export default {
	  data(){
	    return {
	      "cars": Cars
	    }
	  },
	  computed: {
	  	manufacturer(){return this.$route.params.manufacturer}
	  }
	}
</script>
