const nodemailer = require('nodemailer')

const mailConfig = {
    service: process.env.SERVICE,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
}

const transporter = nodemailer.createTransport(mailConfig)
/**
 * @param {string} username
 * @param {string} password
 */
function getUserPasswordTemplate (username, password) {
    return `<p>Twoje dane do logowania:<p>
            <p><span style="font-weight: bold;">Login:</span> ${username}</p>
            <p><span style="font-weight: bold;">Hasło:</span> ${password}</p>`
}

/**
 * @param {string} username
 * @param {string} password
 * @param {string} email
 */
async function sendPasswordEmail (username, password, email) {
    console.log(`${username} ${password} ${email}`)
    try {
        transporter.sendMail({
            from: process.env.MAILSENDER,
            to: email,
            subject: 'TranspolApp nowe konto',
            html: getUserPasswordTemplate(username, password)
        })
    } catch(error) {
        console.log(error)
    }
    console.log('gotowe')
}

module.exports = {
  sendPasswordEmail,
  mailConfig
}
