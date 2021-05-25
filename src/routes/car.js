const { Car } = require('../models/Car')


module.exports.insertCar = async (req, res) => {
    const { registrationNumber, brand, model, classCar, vin } = req.body
  
    // check required parameters
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
          message: 'This registration number of car is already used'
        })
      }
  
      return res.status(500).json({
        message: 'Database error',
        error: error
      })
    }
    res.status(200).end()
  }

module.exports.getCar = (req, res) => {
    // TODO: Sanitize user object
    res.send(req.params.id)
}