const express = require('express')
const compression = require('compression')
const path = require('path')
const app = express()
const axios = require('axios')
const shelljs = require('shelljs')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(compression())

async function redeploy () {
  await shelljs.exec('cd /root/innovadis2017 && git pull && npm run build && forever restart websiteServer', {
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

app.post('/webhook/rebuild/9ed8830c2242', async (req, res) => {
  // for headless webhook
  // kill running builds (not yet implemented, maybe not needed)
  // run new build
  // results in new files in ./dist

  startBuild() // dont await

  res.sendStatus(200)
})

app.post('/webhook/redeploy/783494748a15', async (req, res) => {
  // triggered by github
  // check if it was push event to production branch
  // git pull and restart forever process and run build
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
