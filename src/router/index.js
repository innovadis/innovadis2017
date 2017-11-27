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
          name: 'smart-industry',
          component: require('src/pages/Home/SmartIndustry')
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
          path: '/partners',
          name: 'partners',
          component: require('src/pages/Home/Partners')
        },
        {
          path: '/contact',
          name: 'contact',
          component: require('src/pages/Home/Contact')
        },
        {
          path: '/werkenbij', // Note: also in Job/index.vue
          name: 'jobs',
          component: require('src/pages/Home/JobOverview')
        },
        {
          path: '/vacature/:slug', // Note: also in build/sitemap.js
          name: 'job',
          component: require('src/pages/Home/Job')
        },
        {
          path: '/cases/:name', // Note: also in build/sitemap.js
          name: 'case',
          component: require('src/pages/Home/Case')
        },
        {
          path: '/evenement/:name', // Note: also in build/sitemap.js
          name: 'event',
          component: require('src/pages/Home/Event')
        },
        {
          path: '/nieuws/:name', // Note: also in build/sitemap.js
          name: 'news',
          component: require('src/pages/Home/News')
        },
        {
          path: '/blog/:name', // Note: also in build/sitemap.js
          name: 'blog',
          component: require('src/pages/Home/Blog')
        },
        {
          path: '/voorwaarden',
          name: 'conditions',
          component: require('src/pages/Home/Conditions')
        },
        {
          path: '404',
          component: require('src/pages/Home/NotFound'),
          meta: {
            hideFooter: true
          }
        },
        {
          path: '*', // must be last
          component: require('src/pages/Home/NotFound'),
          meta: {
            hideFooter: true
          }
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
