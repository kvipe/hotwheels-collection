<template>
  <div id="app">
    <header class="header">
        <div class="logo"><router-link to="/"><img alt="Site logo" src="https://dl.dropbox.com/s/pds622rxjatydvk/logo.jpg" title="Home"></router-link></div>
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
	    	<transition name="fade">
	    	  <router-view></router-view>
	    	</transition>
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
	
</style>
