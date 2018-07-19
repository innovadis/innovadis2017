const sm = require('sitemap')
const fs = require('fs-extra')
const path = require('path')
const slug = require('slug')

var sitemap = sm.createSitemap({
  hostname: 'https://www.innovadis.com',
  cacheTime: 600000,  //600 sec (10 min) cache purge period
  urls: [
    { url: '/' }, // TODO should generate from router.js really but problematic since router imports all Vue files that node doesnt understand
    { url: '/over-ons' },
    { url: '/blog' },
    { url: '/partners' },
    { url: '/contact' },
    { url: '/werkenbij' },
    { url: '/smart-health' },
    { url: '/smart-industry' },
    { url: '/pim' },
    { url: '/cases'},
    { url: '/cases/socialhof' },
    { url: '/cases/apollo-vredestein' },
    { url: '/cases/dbi-container-service' },
    { url: '/cases/webportaal-shv' },
    { url: '/cases/comfoor' },
    { url: '/privacy-statement' },
    { url: '/voorwaarden' }
  ]
})

{
  const items = fs.readJSONSync(path.join(__dirname, '../headless/content/blog.json'))

  for (const item of items) {
    sitemap.add({ url: '/blog/' + slug(item.content.nl.title).toLowerCase(), changefreq: 'weekly' })
  }
}

{
  const items = fs.readJSONSync(path.join(__dirname, '../headless/content/events.json'))

  for (const item of items) {
    sitemap.add({ url: '/evenement/' + slug(item.content.nl.title).toLowerCase(), changefreq: 'weekly' })
  }
}

{
  const items = fs.readJSONSync(path.join(__dirname, '../headless/content/news.json'))

  for (const item of items) {
    sitemap.add({ url: '/nieuws/' + slug(item.content.nl.title).toLowerCase(), changefreq: 'weekly' })
  }
}

{
  const items = fs.readJSONSync(path.join(__dirname, '../headless/content/jobs.json'))

  for (const item of items) {
    sitemap.add({ url: '/vacature/' + slug(item.content.nl.title).toLowerCase(), changefreq: 'weekly' })
  }
}

fs.ensureDirSync(path.join(__dirname, '..', 'dist'))
fs.outputFileSync(path.join(__dirname, '..', 'dist', 'sitemap.json'), JSON.stringify(sitemap.urls))
fs.outputFileSync(path.join(__dirname, '..', 'dist', 'sitemap.xml'), sitemap.toString())
