import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/store'
import SmoothScroll from 'smooth-scroll'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('src/pages/Home'),
      children: [
        {
          path: '',
          name: 'home',
          component: require('src/pages/Home/Frontpage')
        },
        {
          path: '/smart-health',
          name: 'smart-health',
          component: require('src/pages/Home/SmartHealth')
        },
        {
          path: '/smart-industry',
          name: 'smart-industry'
        },
        {
          path: '/producten',
          name: 'products'
        },
        {
          path: '/wereld',
          name: 'world',
          component: require('src/pages/Home/World'),
          meta: {
            hideFooter: true
          }
        },
        {
          path: '/over',
          name: 'about',
          component: require('src/pages/Home/About')
        },
        {
          path: '/contact',
          name: 'contact',
          component: require('src/pages/Home/Contact')
        },
        {
          path: '/vacatures',
          name: 'jobs',
          component: require('src/pages/Home/JobOverview')
        },
        {
          path: '/vacature/:id',
          name: 'job',
          component: require('src/pages/Home/Job')
        },
        {
          path: '/cases/:name',
          name: 'case',
          component: require('src/pages/Home/Case')
        },
        {
          path: '/event/:name',
          name: 'event',
          component: require('src/pages/Home/Event')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('setPhoneMenuState', false)

  const scroll = new SmoothScroll()
  scroll.animateScroll(0)

  next()
})

export default router
