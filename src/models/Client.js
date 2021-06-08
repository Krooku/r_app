const mongoose = require('mongoose')

const ClientSchema = mongoose.Schema({
  phoneNumber: {
    type: Number,
    required: false
  }
}, {
  versionKey: false,
  timestamps: true
})

const Client = mongoose.model('Client', ClientSchema)

module.exports = Client