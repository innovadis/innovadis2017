// Updates the instagram.json file periodically because Instagram has closed their unofficial API so browsers cannot get data without auth
const path = require('path')

const JSON_PATH = path.join(__dirname, '..', 'dist', 'static', 'instagram.json')

