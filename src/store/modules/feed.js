import axios from 'axios'
import store from 'src/store'

const state = {
  instagram: [],
  news: [],
  events: [],
  blog: []
}

const mutations = {
  setBlog(state, blog) {
    state.blog = blog
  },

  setNews(state, news) {
    state.news = news
  },

  setEvents(state, events) {
    state.events = events
  },

  setInstagram(state, instagram) {
    state.instagram = instagram
  }
}

const actions = {
  async load(context) {
    const blog = require('src/../headless/content/blog.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'blog',
        feedCreated: new Date(x.content.nl.publish_date)
      })
    })

    const news = require('src/../headless/content/news.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'news',
        feedCreated: new Date(x.content.nl.publish_date)
      })
    })

    const events = require('src/../headless/content/events.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'event',
        feedCreated: new Date(x.content.nl.publish_date)
      })
    })

    let instagramObject

    if (process.env.NODE_ENV === 'production') {
      const instagramRes = await axios.get('/proxy/instagram/innovadis/media/')

      instagramObject = instagramRes.data
    } else {
      instagramObject = require('src/assets/rickandmorty.json') // TODO remove from src
    }

    const instagram = instagramObject.items.map(x => {
      return Object.assign(x, {
        feedType: 'instagram',
        feedCreated: new Date(x.created_time * 1000)
      })
    })

    context.commit('setBlog', blog)
    context.commit('setNews', news)
    context.commit('setEvents', events)
    context.commit('setInstagram', instagram)
  }
}

const getters = {
  contentAll(state) {
    const all = [].concat(state.instagram, state.news, state.events, state.blog)

    all.sort((a, b) => b.feedCreated.toISOString().localeCompare(a.feedCreated.toISOString()))

    return all
  },

  /**
   * Frontpage rules:
   * - If event available, show it as first (there should never be 2 events at the same time, events are rare...)
   * - Fill with latest items, no relevancy needed
   */
  contentFrontpage(state) {
    const all = store.getters['feed/contentAll']

    // take first event, if any, and make it the first element
    if (state.events.length > 0) {
      const event = state.events[0]

      all.splice(all.findIndex(x => x.title === event.title), 1)

      all.unshift(event)
    }

    return all
  }

  /**
   * Blog rules:
   * -
   */

  /**
   * News rules:
   */

  /**
   * Event rules:
   */

  // TODO smarthealth special getter? smartindustry
  // TODO jobs page getter?
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
