import Vue from 'vue'
import Router from 'vue-router'
import Hooper from '@/components/Hooper'
import Hooper1 from '@/components/Hooper1'
import sellernavbar from '@/components/sellernavbar'
import footer1 from '@/components/footer1'
import carousel from '@/components/carousel'
import home from '@/components/home'
import businesreg from '@/components/businesreg'
import businesprofile from '@/components/businesprofile'
import buy from '@/components/buy'
import sellerindex from '@/components/sellerindex'
import viewedit from '@/components/viewedit'
import history from '@/components/history'
import hooper2 from '@/components/hooper2'
import profile from '@/components/profile'

import FuelFillingHistory from '@/components/FuelFillingHistory'
import slider from '@/components/slider'
import hoop from '@/components/hoop'
import MaintenanceHistory from '@/components/MaintenanceHistory'
import PenaltyHistory from '@/components/PenaltyHistory'
import Addnewbills from '@/components/Addnewbills'
import Addfuelfilling from '@/components/Addfuelfilling'
import Addemidetails from '@/components/Addemidetails'
import Vehiclerenewal from '@/components/Vehiclerenewal'
import signup1 from '@/components/signup1'
import signin from '@/components/signin'

import Billform from '@/components/Billform'
import forgotpassword from '@/components/forgotpassword'
import newpage from '@/components/newpage'
import signupbu from '@/components/signupbu'
import completeprofile from '@/components/completeprofile'
import editprofile from '@/components/editprofile'
import nav1 from '@/components/nav1'
import navlogged from '@/components/navlogged'
import addcar1 from '@/components/addcar1'
import editcar1 from '@/components/editcar1'
import deletecar from '@/components/deletecar'
import st from '@/components/st'
import pr from '@/components/pr'
import viewprofile from '@/components/viewprofile'

import store from '../store'

Vue.use(Router)
let router = new Router({
  //export default new Router({

  routes: [






    {
      path: '/Hooper',
      name: 'Hooper',
      component: Hooper
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
      path: '/sellerindex',
      name: 'sellerindex',
      component: sellerindex
    },



    {
      path: '/viewedit',
      name: 'viewedit',
      component: viewedit,
      meta: { requiresAuth: true }

    },
    
    {
      path: '/hooper2',
      name: 'hooper2',
      component: hooper2,
      meta: { requiresAuth: true }

    },

    
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,

    },

    {
      path: '/profile/:id',
      name: 'profile',
      component: profile,
      props: true,
      meta: { requiresAuth: true }


    },
    {
      path: '/FuelFillingHistory/:id',
      name: 'FuelFillingHistory',
      props: true,
      component: FuelFillingHistory,
      meta: { requiresAuth: true }

    },
    {
      path: '/slider',
      name: 'slider',
      component: slider,
      meta: { requiresAuth: true }

    },
    {
      path: '/hoop',
      name: 'hoop',
      component: hoop
    },
    {
      path: '/MaintenanceHistory/:id',
      name: 'MaintenanceHistory',
      props: true,
      component: MaintenanceHistory,
      meta: { requiresAuth: true }

    },
    {
      path: '/PenaltyHistory/:id',
      name: 'PenaltyHistory',
      props: true,
      component: PenaltyHistory,
      meta: { requiresAuth: true }


    },
    {
      path: '/Addnewbills/:id',
      name: 'Addnewbills',
      props: true,
      component: Addnewbills,
      meta: { requiresAuth: true }

    },
    {
      path: '/Addfuelfilling/:id',
      name: 'Addfuelfilling',
      props: true,
      component: Addfuelfilling,
      meta: { requiresAuth: true }

    },
    {
      path: '/Addemidetails/:id',
      name: 'Addemidetails',
      props: true,
      component: Addemidetails,
      meta: { requiresAuth: true }

    },
    {
      path: '/Vehiclerenewal/:id',
      name: 'Vehiclerenewal',
      props: true,
      component: Vehiclerenewal,
      meta: { requiresAuth: true }

    },
    {
      path: '/signup1',
      name: 'signup1',
      component: signup1
    },
    {
      path: '/Billform',
      name: 'Billform',
      component: Billform,
      meta: { requiresAuth: true }

    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: forgotpassword,
      meta: { requiresAuth: true }

    },
    {
      path: '/newpage',
      name: 'newpage',
      component: newpage,
      meta: { requiresAuth: true }

    },
    {
      path: '/signupbu',
      name: 'signupbu',
      component: signupbu
    },
    {
      path: '/completeprofile',
      name: 'completeprofile',
      component: completeprofile,
      meta: { requiresAuth: true }

    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: editprofile,
      meta: { requiresAuth: true }

    },
    {
      path: '/nav1',
      name: 'nav1',
      component: nav1
    },
    {
      path: '/navlogged',
      name: 'navlogged',
      component: navlogged
    },
    {
      path: '/addcar1',
      name: 'addcar1',
      component: addcar1,
      meta: { requiresAuth: true }
    },
    {
      path: '/editcar1/:id',
      name: 'editcar1',
      component: editcar1,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/deletecar/:id',
      name: 'deletecar',
      component: deletecar,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/st',
      name: 'st',
      component: st,
      meta: { requiresAuth: true }
    },

    {
      path: 'viewprofile',
      name: 'viewprofile',
      component: viewprofile,
      meta: { requiresAuth: true }
    },
    {
      path: '/pr',
      name: 'pr',
      component: pr,
      meta: { requiresAuth: true }
    },










  ]
})
router.beforeEach((to, from, next) => {

  if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
    next({ name: 'signin' })
    return
  }

  if (to.path === '/signin' && store.state.isLoggedIn) {
    next({ name: 'home' })
    return
  }
  if (to.path === '/signup1' && store.state.isLoggedIn) {
    next({ name: 'home' })
    return
  }


  if (to.path === '/completeprofile' && store.state.complete) {
    console.log(store.state.complete)
    next({ name: 'slider' })
    return
  }

  next()
  // next({ name: 'home' })
})
export default router



