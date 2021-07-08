const express = require('express')
const auth = require('./users')
const car = require('./car')
const towingErrand = require('./towingErrands')
const rents = require('./rents')
const router = express.Router()

const verifyLogin = require('../middleware/verifyLogin')

router.post('/login', auth.login)
router.post('/logout', verifyLogin, auth.logout)
router.post('/register', verifyLogin, auth.register)
router.get('/user', verifyLogin, auth.getUser)

router.post('/towingErrand', verifyLogin, towingErrand.insertPhotos)

router.post('/car', verifyLogin, car.insertCar)
router.get('/car/:id', verifyLogin, car.getCar)
router.get('/cars', verifyLogin, car.listCars)

router.post('/rent', verifyLogin, rents.createRent)
router.post('/rent/:carId', verifyLogin, rents.createRent)

module.exports = router