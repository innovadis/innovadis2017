const state = {
  all: []
}

const mutations = {
  setAll(state, posts) {
    state.all = posts
  }
}

const actions = {
  load(context) {
    const posts = require('src/../headless/content/blog.json')

    context.commit('setAll', posts)
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
