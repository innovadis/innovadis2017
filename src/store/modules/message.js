import axios from 'axios'

const state = {

}

const mutations = {

}

const actions = {
  async send(context, { formbucketId, from, name, phone, message, subject }) {
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    if (!formbucketId) {
      formbucketId = 'buk_2d5nDVdsWTa9AqmvwHDIAcpB' // Default sales & info@innovadis.com
    }

    await timeout(500)

    if (process.env.NODE_ENV !== 'production') {
      console.log('DEBUG: did not send mail')
      return
    }

    const emailObject = {
      _subject: subject || `Nieuw bericht van ${name} via contactformulier Innovadis.com`,
      email: from,
      naam: name,
      telefoonnummer: phone,
      bericht: message
    }

    await axios.post('https://api.formbucket.com/f/' + formbucketId, emailObject)
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
