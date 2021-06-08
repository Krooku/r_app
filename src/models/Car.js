const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  rentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
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
  }
}, {
  versionKey: false,
  timestamps: true
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car
