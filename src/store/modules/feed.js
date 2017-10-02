import axios from 'axios'
import store from 'src/store'

const MARKET_SMART_INDUSTRY = 'smart-industry'
const MARKET_SMART_HEALTH = 'smart-health'
const HASHTAG_REGEX = new RegExp(/(#[a-z0-9][a-z0-9\-_]*)/ig)

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const state = {
  instagram: [],
  news: [],
  events: [],
  blog: []
}

const mutations = {
  load(state) {
    const blog = require('src/../headless/content/blog.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'blog',
        feedCreated: new Date(x.content.nl.publish_date),
        feedId: 'blog' + x.content.nl.title
      })
    })

    const news = require('src/../headless/content/news.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'news',
        feedCreated: new Date(x.content.nl.publish_date),
        feedId: 'news' + x.content.nl.title
      })
    })

    const events = require('src/../headless/content/events.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'event',
        feedCreated: new Date(x.content.nl.publish_date),
        feedId: 'event' + x.content.nl.title
      })
    })

    state.blog = blog
    state.news = news
    state.events = events
  },

  setInstagram(state, instagram) {
    state.instagram = instagram
  }
}

const actions = {
  async load(context) {
    let instagramObject

    if (process.env.NODE_ENV === 'production') {
      const instagramRes = await axios.get('https://innovadis2018.netlify.com/proxy/instagram/innovadis/media/')

      instagramObject = instagramRes.data
    } else {
      await timeout(500)

      instagramObject = require('src/assets/rickandmorty.json') // TODO remove from src
    }

    const instagram = instagramObject.items.map(x => {
      return Object.assign(x, {
        feedType: 'instagram',
        feedCreated: new Date(x.created_time * 1000),
        feedId: x.id
      })
    })

    context.commit('setInstagram', instagram)
  }
}

const getters = {
  contentAll(state) {
    const all = [].concat(state.instagram, state.news, state.events, state.blog)

    all.sort((a, b) => b.feedCreated.toISOString().localeCompare(a.feedCreated.toISOString()))

    return all
  },

  contentNone() {
    return []
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
  },

  /**
   * For Complex feed if Smart Health is selected
   * - show only blog with type 'smart-health'
   * - show only news/events/instagram with tag 'smart-health'
   */
  contentMarketSmartHealth(state) {
    const events = state.events.filter(x => x.tags.includes(MARKET_SMART_HEALTH))
    const news = state.news.filter(x => x.tags.includes(MARKET_SMART_HEALTH))
    const blog = state.blog.filter(x => x.blogType === MARKET_SMART_HEALTH)

    const instagram = state.instagram.filter(x => x.caption && x.caption.text.includes('#' + MARKET_SMART_HEALTH))

    const items = [].concat(events, news, blog, instagram)

    return items
  },

  /**
 * For Complex feed if Smart Industry is selected
 * - show only blog with type 'smart-industry'
 * - show only news/events/instagram with tag 'smart-industry'
 */
  contentMarketSmartIndustry(state) {
    const events = state.events.filter(x => x.tags.includes(MARKET_SMART_INDUSTRY))
    const news = state.news.filter(x => x.tags.includes(MARKET_SMART_INDUSTRY))
    const blog = state.blog.filter(x => x.blogType === MARKET_SMART_INDUSTRY)

    const instagram = state.instagram.filter(x => x.caption && x.caption.text.includes('#' + MARKET_SMART_INDUSTRY))

    const items = [].concat(events, news, blog, instagram)

    return items
  },

  contentBlog(state) {
    return state.blog
  },

  contentNews(state) {
    return state.news
  },

  contentEvents(state) {
    return state.events
  },

  contentInstagram(state) {
    return state.instagram
  },

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

  tags(state) {
    let tags = [].concat(
      state.events.reduce((acc, val) => { return acc.concat(val.tags) }, []),
      state.blog.reduce((acc, val) => { return acc.concat(val.tags) }, []),
      state.news.reduce((acc, val) => { return acc.concat(val.tags) }, [])
    )

    for (const post of state.instagram) {
      if (post.caption) {
        const hashtags = post.caption.text.match(HASHTAG_REGEX)

        if (hashtags) {
          for (const tag of hashtags) {
            tags.push(tag.replace('#', '').toLowerCase())
          }
        }
      }
    }

    tags = [...new Set(tags)] // dedupe

    {
      const index = tags.findIndex(x => x === MARKET_SMART_HEALTH)
      if (index >= 0) tags.splice(index, 1)
    }

    {
      const index = tags.findIndex(x => x === MARKET_SMART_INDUSTRY)
      if (index >= 0) tags.splice(index, 1)
    }

    return tags
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
