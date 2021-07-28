const express = require('express')
const auth = require('./users')
const car = require('./car')
const towingErrand = require('./towingErrands')
const rents = require('./rents')
const image = require('./images')
const router = express.Router()

const verifyLogin = require('../middleware/verifyLogin')
const verifyRole = require('../middleware/verifyRole')

router.post('/login', auth.login)
router.post('/logout', verifyLogin, auth.logout)
router.post('/register', verifyLogin, verifyRole, auth.register)
router.get('/user', verifyLogin, auth.getUser)

router.post('/towingErrand', verifyLogin, towingErrand.insertPhotos)
router.post('/towingErrand1', verifyLogin, towingErrand.insertTowingErrand)
router.patch('/towingErrand2', verifyLogin, towingErrand.updateTowingErrandDrive)
router.patch('/towingErrand3', verifyLogin, towingErrand.updateTowingErrandTowing)
router.patch('/towingErrand4', verifyLogin, towingErrand.updateTowingErrandReturn)
router.patch('/finishTowingErrand', verifyLogin, towingErrand.updateStatus)

router.post('/addImage', verifyLogin, image.addImage)
router.get('/images/:id', verifyLogin, image.getImages)

router.get('/towingErrand/:id', verifyLogin, towingErrand.getTowingErrand)
router.post('/towingErrands/:filterType', verifyLogin, towingErrand.listTowingErrands)

router.post('/car', verifyLogin, car.insertCar)
router.get('/car/:id', verifyLogin, car.getCar)
router.get('/cars', verifyLogin, car.listCars)

router.post('/rent', verifyLogin, rents.createRent)
router.post('/rent/:carId', verifyLogin, rents.createRent)

module.exports = router