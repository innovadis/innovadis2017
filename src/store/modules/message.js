import axios from 'axios'

const state = {

}

const mutations = {

}

const actions = {
  async send(context, { to, from, name, phone, message }) {
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
