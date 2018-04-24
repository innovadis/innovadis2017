const express = require('express')
const compression = require('compression')
const path = require('path')
const app = express()
const axios = require('axios')
const shelljs = require('shelljs')
const bodyParser = require('body-parser')
const crypto = require('crypto')

require('dotenv').config({ path: path.join(__dirname, '..', '.env') })

const port = process.env.PORT || 3000

const WEBHOOK_REBUILD_SECRET = process.env.WEBHOOK_REBUILD_SECRET
const WEBHOOK_REDEPLOY_SECRET = process.env.WEBHOOK_REDEPLOY_SECRET

if (!WEBHOOK_REBUILD_SECRET) throw new Error('Environment variable WEBHOOK_REBUILD_SECRET must be set')
if (!WEBHOOK_REDEPLOY_SECRET) throw new Error('Environment variable WEBHOOK_REDEPLOY_SECRET must be set')

app.use(bodyParser.json())
app.use(compression())

async function redeploy () {
  await shelljs.exec('cd /root/innovadis2017 && git pull && npm install && npm run build && forever restart websiteServer', {
    async: true
  })
}

async function startBuild () {
  await shelljs.exec('cd /root/innovadis2017 && npm run build', {
    async: true
  })
}

app.get('/proxy/instagram/:splat', async (req, res) => {
  const proxyUrl = req.url.replace('/proxy/instagram', '')

  try {
    const instagramResponse = await axios.get('https://www.instagram.com' + proxyUrl)
    res.json(instagramResponse)
  } catch (error) {
    res.sendStatus(403)
  }
})

app.post('/webhook/rebuild', async (req, res) => {
  // for headless webhook
  // kill running builds (not yet implemented, maybe not needed)
  // run new build
  // results in new files in ./dist
  if (req.query.secret !== WEBHOOK_REBUILD_SECRET) return res.sendStatus(403)

  startBuild() // dont await

  res.sendStatus(200)
})

app.post('/webhook/redeploy', async (req, res) => {
  // triggered by github
  // check if it was push event to production branch
  // git pull and restart forever process and run build
  const githubSignature = req.headers['x-hub-signature']

  const hmac = crypto.createHmac('sha1', WEBHOOK_REDEPLOY_SECRET)
  const calculatedSignature = 'sha1=' + hmac.update(JSON.stringify(req.body)).digest('hex')

  if (githubSignature !== calculatedSignature) return res.sendStatus(403)

  if (req.body.ref === 'refs/heads/production') {
    redeploy()
  }

  res.sendStatus(200)
})

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('*', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '..', 'dist', '404', 'index.html'))
})

app.listen(port, () => {
  console.log('listening on port: ' + port)
})
