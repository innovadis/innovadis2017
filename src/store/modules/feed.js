import axios from 'axios'
import store from 'src/store'

const state = {
  instagram: [],
  news: [],
  events: [],
  blog: []
}

const mutations = {
  load(state) {
    state.blog = require('src/../headless/content/blog.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'blog',
        feedCreated: new Date(x.content.nl.publish_date)
      })
    })

    state.news = require('src/../headless/content/news.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'news',
        feedCreated: new Date(x.content.nl.publish_date)
      })
    })

    state.events = require('src/../headless/content/events.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'event',
        feedCreated: new Date(x.content.nl.publish_date)
      })
    })

    if (process.env.NODE_ENV === 'production') {
      // TODO
    } else {
      const instagram = require('src/assets/rickandmorty.json') // TODO remove from src

      state.instagram = instagram.items.map(x => {
        return Object.assign(x, {
          feedType: 'instagram',
          feedCreated: new Date(x.created_time * 1000)
        })
      })
    }
  }
}

const actions = {

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
