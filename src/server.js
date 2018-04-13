const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()

app.use(compression())
app.enable('trust proxy')

app.use(express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('listening on port: ' + port)
})
