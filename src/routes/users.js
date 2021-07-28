const User = require('../models/User')
const { validatePassword } = require('../services/crypto')

module.exports.getUser = (req, res) => {
    // TODO: Sanitize user object
    res.status(200).json(req.session.user)
}

module.exports.login = async (req, res) => {
    if (!req.session) {
      return res.status(500).json({
        message: 'Creating session failed'
      })
    }
    if (req.session.user) {
      req.session.user = null
    }
  
    const { username, password } = req.body
  
    if (!username || !password) {
      return res.status(400).json({
        message: 'Incomplete request'
      })
    }
  
    try {
      const user = await User.findOne({
        'username': username
      }).exec()

      const validated = await validatePassword(password, user.password)

      if (!user || !validated) {
        return res.status(400).json({
          message: 'Złe hasło lub nazwa użytkownika'
        })
      }
      req.session.user = {
        id: user._id,
        role: user.role,
        username: user.username
      }
      return res.status(200).json(req.session.user)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
}

module.exports.register = async (req, res) => {
  const { username, email, role } = req.body

  if (!username || !role || !email) {
    return res.status(400).json({
      message: 'Incomplete request'
    })
  }

  if (!validateEmail(email)) {
    return res.status(400).json({
      message: 'Email must be valid'
    })
  }

  const user = new User({ email, username, role })
  console.log(user)
  try {
    await user.save()
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: 'This username or email is already used'
      })
    }

    return res.status(500).json({
      message: 'Database error',
      error: error
    })
  }

  /* if (!config.skipEmailVerification) {
    mailer.sendVerificationEmail(username, email)
  } */

  res.status(200).end()
}

module.exports.logout = (req, res) => {
  req.session.destroy()
  res.status(200).end()
}

/**
 * Validates email
 * @param {string} email
 */
 function validateEmail (email) {
  const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegexp.test(email)
}
