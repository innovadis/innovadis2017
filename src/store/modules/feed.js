import axios from 'axios'
import store from 'src/store'
import slug from 'slug'

const MARKET_SMART_INDUSTRY = 'smart-industry'
const MARKET_SMART_HEALTH = 'smart-health'
const HASHTAG_REGEX = new RegExp(/(#[a-z0-9][a-z0-9\-_]*)/ig)

const state = {
  instagram: [],
  news: [],
  events: [],
  blog: [],
  jobs: []
}

const mutations = {
  load (state) {
    const blog = require('src/../headless/content/blog.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'blog',
        feedCreated: new Date(x.content.nl.publish_date),
        feedId: 'blog' + x.content.nl.title,
        slug: slug(x.content.nl.title).replace('.', '')
      })
    })

    const news = require('src/../headless/content/news.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'news',
        feedCreated: new Date(x.content.nl.publish_date),
        feedId: 'news' + x.content.nl.title,
        slug: slug(x.content.nl.title).replace('.', '')
      })
    })

    const events = require('src/../headless/content/events.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'event',
        feedCreated: new Date(x.content.nl.publish_date),
        feedId: 'event' + x.content.nl.title,
        slug: slug(x.content.nl.title).replace('.', '')
      })
    })

    const jobs = require('src/../headless/content/jobs.json').map(x => {
      return Object.assign(x.content.nl, {
        feedType: 'job',
        feedCreated: new Date(x.content.nl.publish_date),
        feedId: 'job' + x.content.nl.title,
        slug: slug(x.content.nl.title).replace('.', '')
      })
    })

    state.blog = blog
    state.news = news
    state.events = events
    state.jobs = jobs
  },

  setInstagram (state, sourceObj) {
    const enhancedObj = sourceObj.data.map(x => {
      return Object.assign(x, {
        feedType: 'instagram',
        feedCreated: new Date(x.created_time * 1000),
        feedId: x.id
      })
    })

    state.instagram = enhancedObj
  }
}

const actions = {
  async load (context) {
    if (process.env.NODE_ENV === 'production') {
      const res = await axios.get('https://www.innovadis.com/static/instagram.json')

      context.commit('setInstagram', res.data)
    } else {
      setTimeout(() => {
        const instagramObject = require('src/assets/instagram.json')

        context.commit('setInstagram', instagramObject)
      }, 200)
    }
  }
}

const getters = {
  contentAll (state) {
    const all = [].concat(state.instagram, state.news, state.events, state.blog)

    all.sort((a, b) => b.feedCreated.toISOString().localeCompare(a.feedCreated.toISOString()))

    return all
  },

  contentNone () {
    return []
  },

  /**
   * Frontpage rules:
   * - If event available, show it as first (there should never be 2 events at the same time, events are rare...)
   * - Fill with latest items, no relevancy needed
   */
  contentFrontpage (state) {
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
  contentMarketSmartHealth (state) {
    const events = state.events.filter(x => x.tags.includes(MARKET_SMART_HEALTH))
    const news = state.news.filter(x => x.tags.includes(MARKET_SMART_HEALTH))
    const blog = state.blog.filter(x => x.blogType === MARKET_SMART_HEALTH)

    const instagram = state.instagram.filter(x => x.caption.text.toLowerCase().includes('#' + MARKET_SMART_HEALTH))

    const items = [].concat(events, news, blog, instagram)

    return items
  },

  /**
 * For Complex feed if Smart Industry is selected
 * - show only blog with type 'smart-industry'
 * - show only news/events/instagram with tag 'smart-industry'
 */
  contentMarketSmartIndustry (state) {
    const events = state.events.filter(x => x.tags.includes(MARKET_SMART_INDUSTRY))
    const news = state.news.filter(x => x.tags.includes(MARKET_SMART_INDUSTRY))
    const blog = state.blog.filter(x => x.blogType === MARKET_SMART_INDUSTRY)

    const instagram = state.instagram.filter(x => x.caption.text.toLowerCase().includes('#' + MARKET_SMART_INDUSTRY))

    const items = [].concat(events, news, blog, instagram)

    return items
  },

  contentBlog (state) {
    return state.blog
  },

  contentNews (state) {
    return state.news
  },

  contentEvents (state) {
    return state.events
  },

  contentInstagram (state) {
    return state.instagram
  },

  contentTagSmartHealth (state) {
    const events = state.events.filter(x => x.tags.includes(MARKET_SMART_HEALTH))
    const news = state.news.filter(x => x.tags.includes(MARKET_SMART_HEALTH))
    const blog = state.blog.filter(x => x.blogType === MARKET_SMART_HEALTH)

    const items = [].concat(events, news, blog)

    return items
  },

  contentTagSmartIndustry (state) {
    const events = state.events.filter(x => x.tags.includes(MARKET_SMART_INDUSTRY))
    const news = state.news.filter(x => x.tags.includes(MARKET_SMART_INDUSTRY))
    const blog = state.blog.filter(x => x.blogType === MARKET_SMART_INDUSTRY)

    const items = [].concat(events, news, blog)

    return items
  },

  contentTags (state) {
    const allItems = store.getters['feed/contentAll']

    const itemsWithTags = (tags, filterTitle) => {
      const items = allItems.filter(item => {
        if (item.feedType === 'instagram') {
          if (item.caption.text && tags.some(t => item.caption.text.toLowerCase().includes('#' + t.toLowerCase()))) {
            return item
          }
        } else {
          if (item.title !== filterTitle && tags.some(t => item.tags.includes(t.toLowerCase()))) return item
        }
      })

      if (items.length === 0) return allItems.filter(x => x.title !== filterTitle)

      return items
    }

    return itemsWithTags
  },

  tags (state) {
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
