# Innovadis Landing Page 2017

Innovadis website made in Vue.js

Frontend only, no backend

Formbucket for form sending

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

Copy the .env.example to .env and set the correct values. (otherwhise anyone can DDoS our server quite easily).

Test the Express web server by running (this is exactly what the VPS does too):
`npm run server`

Now you can check the prerendered pages by viewing their source and they should contain everything for the best SEO results.


To deploy simply push or merge to the `production` branch. Github will send a webhook to the VPS which triggers a redeploy.
