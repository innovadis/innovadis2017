import axios from 'axios'

const state = {

}

const mutations = {

}

const actions = {
  async send(context, { to, from, name, phone, message, subject }) {
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    let cc = null

    if (!to) {
      to = 'sales@innovadis.com'
      cc = 'info@innovadis.com'
    }

    await timeout(500)

    if (process.env.NODE_ENV !== 'production') {
      console.log('DEBUG: did not send mail')
      return
    }

    const emailObject = {
      _subject: subject || `Nieuw bericht van ${name} via contactformulier Innovadis.com`,
      email: from,
      name,
      phone,
      message,
      _language: 'nl'
    }

    if (cc) {
      emailObject.cc = cc
    }

    await axios.post('https://formspree.io/' + to, emailObject)
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
