import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import signup from '@/components/signup'
import signupb from '@/components/signupb'
import forgot from '@/components/forgot'
import Hooper from '@/components/Hooper'
import Hooper1 from '@/components/Hooper1'
import navbar from '@/components/navbar'
import navbar1 from '@/components/navbar1'
import sellernavbar from '@/components/sellernavbar'
import footer1 from '@/components/footer1'
import carousel from '@/components/carousel'
import home from '@/components/home'
import businesreg from '@/components/businesreg'
import businesprofile from '@/components/businesprofile'
import userprofile from '@/components/userprofile'
import buy from '@/components/buy'
import myaccount from '@/components/myaccount'
import documentreg from '@/components/documentreg'
import sellerindex from '@/components/sellerindex'
import car from '@/components/car'
import addcar from '@/components/addcar'
import viewedit from '@/components/viewedit'
import editcar from '@/components/editcar'
import cardoc from '@/components/cardoc'

















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
      path: '/signupb',
      name: 'signupb',
      component: signupb
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
      path: '/navbar1',
      name: 'navbar1',
      component: navbar1
    },
    {
      path: '/sellernavbar',
      name: 'sellernavbar',
      component: sellernavbar
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
    },

    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: myaccount
    },
    {
      path: '/documentreg',
      name: 'documentreg',
      component: documentreg
    },
    {
      path: '/sellerindex',
      name: 'sellerindex',
      component: sellerindex
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/addcar',
      name: 'addcar',
      component: addcar
    },
    {
      path: '/viewedit',
      name: 'viewedit',
      component: viewedit
    },
    {
      path: '/editcar',
      name: 'editcar',
      component: editcar
    },
    {
      path: '/cardoc',
      name: 'cardoc',
      component: cardoc
    }
  ]
})
