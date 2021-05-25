const mongoose = require('mongoose')
const { hashPassword } = require('../services/crypto')

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
    required: true
  },
  role: {
    type: String,
    enum: ['member', 'admin'],
    default: 'member'
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  versionKey: false,
  timestamps: true
})

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

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
