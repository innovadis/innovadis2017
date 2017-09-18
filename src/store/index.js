import Vue from 'vue'
import Vuex from 'vuex'

import message from './modules/message'
import blog from './modules/blog'
import news from './modules/news'
import events from './modules/events'
import jobs from './modules/jobs'

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
    blog,
    news,
    events,
    jobs
  }
})
