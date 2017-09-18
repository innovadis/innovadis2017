const state = {
  all: []
}

const mutations = {
  setAll(state, jobs) {
    state.all = jobs
  }
}

const actions = {
  load(context) {
    const jobs = require('src/../headless/content/jobs.json')

    context.commit('setAll', jobs)
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
