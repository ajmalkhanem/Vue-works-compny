import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import signup from '@/components/signup'
import forgot from '@/components/forgot'
import Hooper from '@/components/Hooper'
import navbar from '@/components/navbar'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: forgot
    },
    {
      path: '/Hooper',
      name: 'Hooper',
      component: Hooper
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: navbar
    }
  ]
})
