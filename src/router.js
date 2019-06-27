import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Manufacturers from './views/Manufacturers.vue'
import Model from './views/Model.vue'
import E404 from './views/E404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
/*    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },*/
    {
      path: '/cars/:manufacturer',
      name: 'manufacturers',
      component: Manufacturers
    },
    {
      path: '/cars/:manufacturer/:model',
      name: 'model',
      component: Model
    },
    {
      path: '*',
      name: 'E404',
      component: E404
    }
  ]
})
