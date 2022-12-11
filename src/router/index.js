import Vue from 'vue'
import VueRouter from 'vue-router'
// import Films from '@/views/Films'
// import nowPlaying from '@/views/Films/nowPlaying'
// import Cinemas from '@/views/Cinemas'
// import Massege from '@/views/Massege'
// import Center from '@/views/Center'
// import Comingsoon from '@/views/Films/Comingsoon'
// import Film from '@/views/Film'
// import City from '@/views/City'
// import Search from '@/views/Search'
// import login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    component: () => import('@/views/Films'),
    children: [
      {
        path: '/films/nowplaying',
        component: () => import('@/views/Films/nowPlaying')
      },
      {
        path: '/films/comingsoon',
        component: () => import('@/views/Films/Comingsoon')
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    path: '/cinemas',
    component: () => import('@/views/Cinemas')
  },
  {
    path: '/massege',
    component: () => import('@/views/Massege')
  },
  {
    path: '/center',
    component: () => import('@/views/Center'),
    meta: {
      login: true
    }
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  },
  {
    path: '/film/:id',
    name: 'Film',
    component: () => import('@/views/Film')
  },
  {
    path: '/cinemas/search',
    name: 'search',
    component: () => import('@/views/Search')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: { sourse: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
