// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Button from 'src/components/Button'
import ButtonAlternate from 'src/components/ButtonAlternate'
import VueInView from 'vueinview'
import Moment from 'moment'
import VueHead from 'vue-head'
import VueAnalytics from 'vue-analytics'
import VueTouch from 'vue-touch'
import vuexI18n from 'vuex-i18n'

Vue.use(VueAnalytics, {
  id: 'UA-5365402-7',
  router,
  checkDuplicatedScript: true,
  disableScriptLoader: process.env.NODE_ENV !== 'production'
})

Moment.locale('nl')

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueInView)
Vue.use(VueHead, {
  complement: 'Innovadis'
})
Vue.use(VueTouch, {
  name: 'v-touch'
})

VueTouch.config.swipe = {
  direction: 'horizontal'
}

Vue.component('InnoButton', Button)
Vue.component('InnoButtonAlternate', ButtonAlternate)

store.commit('feed/load')
store.dispatch('feed/load')
store.dispatch('jobs/load')

const messages = {
  nl: {
    'aboutUs': 'Over ons.',
    'contact': 'Contact.'
  },
  en: {
    'Over ons.': 'About us.',
    'Contact.': 'Contact.'
  }
}

Vue.use(vuexI18n.plugin, store)

Vue.i18n.add('en', messages.en)
Vue.i18n.add('nl', messages.nl)

// Vue.i18n.set('nl')

store.commit('setLanguage', 'nl')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
