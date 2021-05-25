const express = require('express')
const auth = require('./users')
const car = require('./car')
const router = express.Router()

router.post('/login', auth.login)
router.get('/user', auth.getUser)

router.post('/car', car.insertCar)
router.get('/car/:id', car.getCar)

module.exports = router