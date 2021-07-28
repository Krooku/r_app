const crypto = require('crypto')

/**
 * @typedef {Object} HashOptions
 * @property {string} [salt]
 * @property {number} [rounds]
 */

/**
 * Hash password using PBKDF2
 * @param {string} password
 * @param {HashOptions} [options]
 * @returns {Promise<string>} Hash string
 */
function hashPassword (password, options = {}) {
  return new Promise((resolve, reject) => {
    options.salt = options.salt || crypto.randomBytes(16).toString('base64')
    options.rounds = options.rounds || 1000

    crypto.pbkdf2(password, options.salt, options.rounds, 64, 'sha512', (err, hash) => {
      if (err) reject(err)

      resolve([
        hash.toString('base64'),
        options.salt,
        options.rounds
      ].join('|'))
    })
  })
}

/**
 * Compares password with a hash
 * @param {string} trial Tested password
 * @param {string} hashedString Hashed string
 * @returns {Promise<boolean>}
 */
async function validatePassword (trial, hashedString) {
  const hashed = hashedString.split('|')
  if (hashed.length !== 3) return false
  const hashedTrial = await hashPassword(trial, {
    salt: hashed[1],
    rounds: parseInt(hashed[2])
  })
  return hashedTrial === hashedString
}

/**
 * Compares password with a hash
 * @returns {string}
 */
function generetePassword () {
  return Math.random().toString(36).slice(-8);
}

module.exports = {
  hashPassword,
  validatePassword,
  generetePassword
}
