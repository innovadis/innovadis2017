const sm = require('sitemap')
const fs = require('fs-extra')
const path = require('path')
const slug = require('slug')

var sitemap = sm.createSitemap({
  hostname: 'http://www.innovadis.com',
  cacheTime: 600000,  //600 sec (10 min) cache purge period
  urls: [
    { url: '/' },
    { url: '/over' },
    { url: '/wereld' },
    { url: '/partners' },
    { url: '/contact' },
    { url: '/werkenbij' },
    { url: '/pim' },
    { url: '/cases/socialhof' },
  ]
})

{
  const items = fs.readJSONSync(path.join(__dirname, '../headless/content/blog.json'))

  for (const item of items) {
    sitemap.add({ url: 'blog/' + slug(item.content.nl.title), changefreq: 'weekly' })
  }
}

{
  const items = fs.readJSONSync(path.join(__dirname, '../headless/content/events.json'))

  for (const item of items) {
    sitemap.add({ url: 'evenement/' + slug(item.content.nl.title), changefreq: 'weekly' })
  }
}

{
  const items = fs.readJSONSync(path.join(__dirname, '../headless/content/news.json'))

  for (const item of items) {
    sitemap.add({ url: 'nieuws/' + slug(item.content.nl.title), changefreq: 'weekly' })
  }
}

{
  const items = fs.readJSONSync(path.join(__dirname, '../headless/content/jobs.json'))

  for (const item of items) {
    sitemap.add({ url: 'vacature/' + slug(item.content.nl.title), changefreq: 'weekly' })
  }
}

fs.outputFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap.toString())
