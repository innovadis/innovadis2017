import Vue from 'vue'
import Vuex from 'vuex'

import message from './modules/message'
import feed from './modules/feed'
import jobs from './modules/jobs'

const state = {
  phoneMenuOpen: false,
  lang: 'nl'
}

const mutations = {
  setPhoneMenuState(state, v) {
    state.phoneMenuOpen = v
  },
  setLanguage(stage, v) {
    state.lang = v
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    message,
    feed,
    jobs
  }
})
