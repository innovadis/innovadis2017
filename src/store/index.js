import Vue from 'vue'
import Vuex from 'vuex'

import message from './modules/message'
import feed from './modules/feed'

const state = {
  phoneMenuOpen: false
}

const mutations = {
  setPhoneMenuState(state, v) {
    state.phoneMenuOpen = v
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    message,
    feed
  }
})
