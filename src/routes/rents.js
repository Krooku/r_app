const Rent = require('../models/Rent')
const schedule = require('node-schedule');

const job = schedule.scheduleJob('41 * * * *', async () => {
  console.log('The answer to life, the universe, and everything!');
});


module.exports.createRent = async (req, res) => {
    const userIdStart = req.session.user.id
    const carId = req.params?.carId || req.body?.carId
    console.log(carId)
    const { name, startDate, endDate, days } = req.body

    if (!endDate) endDate = null
  
    if (!name || !startDate || !days) {
      return res.status(400).json({
        message: 'Incomplete request'
      })
    }
    const rent = new Rent({ userIdStart, carId, name, startDate, endDate, days })
    
    try {
        await Car.findOneAndUpdate({
            _id: carId
        }, {
            rentId: rent._id
        }, {
            new: false
        }).exec()
        await rent.save()
        res.status(200).json(rent)

    } catch(err) {
        res.status(400).json({
            err
        })
    }
}