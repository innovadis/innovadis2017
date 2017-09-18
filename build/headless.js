const axios = require('axios')
const fs = require('fs-extra')
const path = require('path')

const HEADLESS_TOKEN = 'xITlo9kTEuUdiUpvYNjJSVM14WRjZghH'

axios.get('http://content.headless.rest/api/v1/innovadis/content/blog', {
  params: {
    token: HEADLESS_TOKEN
  }
}).then((res) => {
  fs.outputFileSync(path.join(__dirname, '..', 'headless', 'content', 'blog.json'), JSON.stringify(res.data.items, null, '  '))
}).catch((err) => {
  console.error(err.message)
  process.exit(-1)
})

axios.get('http://content.headless.rest/api/v1/innovadis/content/nieuws', {
  params: {
    token: HEADLESS_TOKEN
  }
}).then((res) => {
  fs.outputFileSync(path.join(__dirname, '..', 'headless', 'content', 'news.json'), JSON.stringify(res.data.items, null, '  '))
}).catch((err) => {
  console.error(err.message)
  process.exit(-1)
})

axios.get('http://content.headless.rest/api/v1/innovadis/content/evenement', {
  params: {
    token: HEADLESS_TOKEN
  }
}).then((res) => {
  fs.outputFileSync(path.join(__dirname, '..', 'headless', 'content', 'events.json'), JSON.stringify(res.data.items, null, '  '))
}).catch((err) => {
  console.error(err.message)
  process.exit(-1)
})

axios.get('http://content.headless.rest/api/v1/innovadis/content/vacature', {
  params: {
    token: HEADLESS_TOKEN
  }
}).then((res) => {
  fs.outputFileSync(path.join(__dirname, '..', 'headless', 'content', 'jobs.json'), JSON.stringify(res.data.items, null, '  '))
}).catch((err) => {
  console.error(err.message)
  process.exit(-1)
})
