import axios from 'axios'

const state = {

}

const mutations = {

}

const actions = {
  async send(context, { to, from, name, phone, message }) {
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    await timeout(500)

    return // TODO enable message
    await axios.post('https://formspree.io/' + to, {
      _subject: `Nieuw bericht van ${name} via contactformulier Innovadis.com`,
      email: from,
      name,
      phone,
      message,
      _language: 'nl'
    })
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
