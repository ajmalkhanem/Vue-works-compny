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
import navbar2 from '@/components/navbar2'
import sellernavbar from '@/components/sellernavbar'
import footer1 from '@/components/footer1'
import carousel from '@/components/carousel'
import home from '@/components/home'
import businesreg from '@/components/businesreg'
import businesprofile from '@/components/businesprofile'
import customerprofile from '@/components/customerprofile'
import userprofile from '@/components/userprofile'
import buy from '@/components/buy'
import myaccount from '@/components/myaccount'
import documentreg from '@/components/documentreg'
import sellerindex from '@/components/sellerindex'
import car from '@/components/car'
import newcar from '@/components/newcar'
import usedcar from '@/components/usedcar'
import addcar from '@/components/addcar'
import viewedit from '@/components/viewedit'
import editcar from '@/components/editcar'
import cardoc from '@/components/cardoc'
import modal1 from '@/components/modal1'
import modal2 from '@/components/modal2'
import modal3 from '@/components/modal3'
import modal4 from '@/components/modal4'
import access from '@/components/access'
import fuel from '@/components/fuel'
import myvehicle from '@/components/myvehicle'
import history from '@/components/history'
import store from '../store'






Vue.use(Router)
let router=new Router({
//export default new Router({
  
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
      path: '/navbar2',
      name: 'navbar2',
      component: navbar2
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
      component: businesreg,
      meta: { requiresAuth: true }

    },
    {
      path: '/businesprofile',
      name: 'businesprofile',
      component: businesprofile,
      meta: { requiresAuth: true }

    },
    {
      path: '/customerprofile',
      name: 'customerprofile',
      component: customerprofile,
      meta: { requiresAuth: true }

    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: userprofile,
      meta: { requiresAuth: true }

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
      component: myaccount,
      meta: { requiresAuth: true }

    },
    {
      path: '/documentreg',
      name: 'documentreg',
      component: documentreg,
      meta: { requiresAuth: true }

    },
    {
      path: '/sellerindex',
      name: 'sellerindex',
      component: sellerindex
    },
    {
      path: '/car/:id',
      name: 'car',
      component: car,
      props: true,
      meta: { requiresAuth: true }

    },
    {
      path: '/newcar',
      name: 'newcar',
      component: newcar,
      meta: { requiresAuth: true }

    },
    {
      path: '/usedcar',
      name: 'usedcar',
      component: usedcar,
      meta: { requiresAuth: true }

    },
    {
      path: '/addcar',
      name: 'addcar',
      component: addcar,
      meta: { requiresAuth: true }

    },
    {
      path: '/viewedit',
      name: 'viewedit',
      component: viewedit,
      meta: { requiresAuth: true }

    },
    {
      path: '/editcar',
      name: 'editcar',
      component: editcar,
      meta: { requiresAuth: true }

    },
    {
      path: '/cardoc',
      name: 'cardoc',
      component: cardoc,
      meta: { requiresAuth: true }

    },
    {
      path: '/modal1/:id',
      name: 'modal1',
      component: modal1,
      meta: { requiresAuth: true }

    },
    {
      path: '/modal2/:id',
      name: 'modal2',
      component: modal2,
      meta: { requiresAuth: true }

    },
    {
      path: '/modal3/:id',
      name: 'modal3',
      component: modal3,
      meta: { requiresAuth: true }

    },
    {
      path: '/modal4',
      name: 'modal4',
      component: modal4,
      meta: { requiresAuth: true }

    },
    {
      path: '/access',
      name: 'access',
      component: access,
      meta: { requiresAuth: true }

    },
    {
      path: '/fuel',
      name: 'fuel',
      component: fuel,
      meta: { requiresAuth: true }

    },
    {
      path: '/myvehicle',
      name: 'myvehicle',
      component: myvehicle,
      meta: { requiresAuth: true }

    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})
router.beforeEach((to, from, next) => {

  if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
    next({ name: 'login' })
    return
  }

  if (to.path === '/login' && store.state.isLoggedIn) {
    next({ name: 'userprofile' })
    return
  }
  
  next()
 // next({ name: 'home' })
})
export default router



