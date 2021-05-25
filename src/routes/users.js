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
      console.log('sending')
      return res.status(200).json(req.session.user)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }