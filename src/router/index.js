import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import signup from '@/components/signup'
import forgot from '@/components/forgot'
import Hooper from '@/components/Hooper'
import Hooper1 from '@/components/Hooper1'
import navbar from '@/components/navbar'
import footer1 from '@/components/footer1'
import carousel from '@/components/carousel'
import home from '@/components/home'
import businesreg from '@/components/businesreg'
import businesprofile from '@/components/businesprofile'
import userprofile from '@/components/userprofile'










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
      path: '/footer1',
      name: 'footer1',
      component: footer1
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
    },
    {
      path: '/businesreg',
      name: 'businesreg',
      component: businesreg
    },
    {
      path: '/businesprofile',
      name: 'businesprofile',
      component: businesprofile
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: userprofile
    },
    {
      path: '/Hooper1',
      name: 'Hooper1',
      component: Hooper1
    }

  ]
})
