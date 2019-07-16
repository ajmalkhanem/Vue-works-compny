import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import signup from '@/components/signup'
import forgot from '@/components/forgot'
import Hooper from '@/components/Hooper'
import navbar from '@/components/navbar'
import list from '@/components/list'
import footer from '@/components/footer'
import carousel from '@/components/carousel'
import home from '@/components/home'







Vue.use(Router)

export default new Router({
  routes: [
    
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
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: carousel
    },
    {
      path: '/',
      name: 'home',
      component: home
    }

  ]
})
