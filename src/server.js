const express = require('express')
const compression = require('compression')
const path = require('path')
const app = express()
const axios = require('axios')

const port = process.env.PORT || 3000

app.use(compression())

app.get('/proxy/instagram/:splat', async (req, res) => {
  const proxyUrl = req.url.replace('/proxy/instagram', '')

  try {
    const instagramResponse = await axios.get('https://www.instagram.com' + proxyUrl)
    res.json(instagramResponse)
  } catch (error) {
    res.sendStatus(403)
  }
})

app.get('/404', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '..', 'dist', '404', 'index.html'))
})

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('*', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log('listening on port: ' + port)
})
