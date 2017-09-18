const state = {
  all: []
}

const mutations = {
  setAll(state, events) {
    state.all = events
  }
}

const actions = {
  load(context) {
    const events = require('src/../headless/content/events.json')

    context.commit('setAll', events)
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
