const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  classCar: {
    type: String,
    required: true,
    default: 'C'
  },
  vin: {
    type: String,
    required: true,
  },
  isRented: {
    type: Boolean,
    default: false
  }
}, {
  versionKey: false,
  timestamps: true
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car
