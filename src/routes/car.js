const Car = require('../models/Car')


module.exports.insertCar = async (req, res) => {
  const { registrationNumber, brand, model, classCar, vin } = req.body

  if (!registrationNumber || !brand || !model || !classCar || !vin) {
    return res.status(400).json({
      message: 'Incomplete request'
    })
  }

  const car = new Car({ registrationNumber, brand, model, classCar, vin })

  try {
    await car.save()
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: 'This registration number or vin of car is already used'
      })
    }

    return res.status(500).json({
      message: 'Database error',
      error: error
    })
  }
  res.status(200).end()
}

module.exports.getCar = async (req, res) => {
  const { carId } = req.params

  if (!carId) {
    return res.status(400).json({
      message: 'Incomplete request'
    })
  }

  const car = await Car.findOne({
    _id: carId
  }).lean().populate('rentId').exec()

  if (!car) {
    return res.status(404).json({
      message: 'Car does not exist'
    })
  }
  res.status(200).json(car)
}

module.exports.listCars = async (req, res) => {
  await Car.find().lean().populate('rentId').exec().then(cars => {
    res.status(200).json(cars)
  }).catch(err => {
    return res.status(500).json({
      message: 'Database error',
      err
  })
})
}