# innovadis-corporate-smart

> Innovadis Landing page website 2017

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Deployment

Because of SEO, prerendering is required. Sadly the Netlify docker image does not have enough memory to prerender our site, so we cannot do that there.
So this site is now running on a DigitalOcean VPS with Caddy as reverse proxy and Express.js as web server.

Before running the server or deploying, make sure to `npm run build`. This compiles the Vue project and prerenders all content.

Test the Express web server by running (this is exactly what the VPS does too):
`npm run server`

Temporary deployment (permanent deployment not yet finished):
`npm run deploy`

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
