const mongoose = require('mongoose')

const TowingErrandSchema = mongoose.Schema({
    errandNumber: {
        type: String,
        default: 'prywatne'
    },
    photos: {
        type: [],
        default: []
    }

})

const TowingErrand = mongoose.model('TowingErrand', TowingErrandSchema)

module.exports = TowingErrand
