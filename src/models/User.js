const mongoose = require('mongoose')
const { hashPassword, generetePassword } = require('../services/crypto')
const mailer = require('../services/mailer')

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    default: 'brak'
  },
  role: {
    type: String,
    enum: ['member', 'admin'],
    default: 'member'
  }
}, {
  versionKey: false,
  timestamps: true
})

UserSchema.pre('save', async function (next) {
  // if (!this.isModified('password')) return next()
  this.password = generetePassword()
  mailer.sendPasswordEmail(this.username, this.password, this.email)
  const hashed = await hashPassword(this.password)
  this.password = hashed

  next()
})

UserSchema.pre('update', beforeUpdate)
UserSchema.pre('findOneAndUpdate', beforeUpdate)
UserSchema.pre('updateOne', beforeUpdate)

async function beforeUpdate (next) {
  const update = this.getUpdate()
  const newPassword = update && update.password

  if (!newPassword) return next()

  this.update({}, { password: await hashPassword(newPassword) })

  next()
}

const User = mongoose.model('User', UserSchema)

module.exports = User
