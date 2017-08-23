import Vue from 'vue'
import Vuex from 'vuex'

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

  }
})
