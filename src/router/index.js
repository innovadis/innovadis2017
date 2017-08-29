import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
          name: 'world'
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
        }
      ]
    }
  ]
})
