<template>
  <div id="app">
    <header class="header">
        <div class="logo"><router-link to="/">kvipe hot wheels collection</router-link></div>
    </header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
    </div> -->
    <div class="container">
	    <aside class="manufacturers">
	      <header>Manufacturers:</header>
	      <ul>
	       	<li v-for="(value, key) in cars"><router-link :to="`/cars/${key}`" tag="a">{{key}}</router-link></li>
	       </ul>
	    </aside>
	    <div class="content">
	   		<router-view></router-view>
	    </div>
	  </div>
	  <footer>
	  	<p><a href="https://github.com/kvipe">kvipe</a> &copy; 2019</p>
	  </footer>
  </div>
</template>

<script>
import Cars from '@/assets/data/cars.js'
import "@/assets/less/styles.less";

export default {
  data(){
    return {
      "cars": Cars
    }
  }
}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap');
</style>
