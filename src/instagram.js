// Updates the instagram.json file periodically because Instagram has closed their unofficial API so browsers cannot get data without auth
const path = require('path')
const Instagram = require('node-instagram').default
const fs = require('fs-extra')

require('dotenv').config({ path: path.join(__dirname, '..', '.env') })

async function sendMail (msg) {
  const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN
  })

  const mailData = {
    from: process.env.NOTIFICATION_MAIL_ADDRESS,
    to: process.env.NOTIFICATION_MAIL_ADDRESS,
    subject: 'Instagram script failed',
    text: 'Error occurred\n\n' + msg
  }

  try {
    await mailgun.messages().send(mailData)
  } catch (error) {
    console.error(error)
  }
}

const JSON_PATH = path.join(__dirname, '..', 'dist', 'static', 'instagram.json')

const instagram = new Instagram({
  clientId: process.env.INSTAGRAM_CLIENTID,
  clientSecret: process.env.INSTAGRAM_SECRET,
  accessToken: process.env.INSTAGRAM_ACCESSTOKEN
})

  ; (async () => {
    try {
      const data = await instagram.get('users/self/media/recent')

      fs.writeJsonSync(JSON_PATH, data)
    } catch (error) {
      console.error(error)

      await sendMail(JSON.stringify(error, null, '  '))
    }
  })()
