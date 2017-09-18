const state = {
  all: []
}

const mutations = {
  setAll(state, newsitems) {
    state.all = newsitems
  }
}

const actions = {
  load(context) {
    const newsitems = require('src/../headless/content/news.json')

    context.commit('setAll', newsitems)
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
