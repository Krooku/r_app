const mongoose = require('mongoose')

const TowingErrandSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    errandNumber: {
        type: String,
        default: 'prywatne',
        maxlength: 64
    },
    photos: {
        type: Array,
        default: []
    },
    kilometers: {
        drive: { type: Number },
        towing: { type: Number },
        return: { type: Number },
    },
    journey: {
        drive: { type: Date },
        towing: { type: Date },
        return: { type: Date },
    },
    DMC: {
        type: Number,
        min: 10,
        max: 5000
    },
    carNumber: {
        type: String,
        maxlength: 10
    },
    tugNumber: {
        type: String,
        maxlength: 10
    },
    status: {
        type: String,
        enum: ['Anulowanie', 'W trakcie', 'Zrealizowane'],
        default: 'W trakcie'
    },
    transport: {
        quantity: { type: Number },
        type: { 
            type: String,
            enum: ['cabin', 'car', 'both']
        }
    },
    handed: {
        type: String,
        enum: ['serwis ASO', 'inny warsztat', 'dom klienta', 'inne'],
        default: 'inne'
    },
    incidentPlace: {
        type: String,
        maxlength: 64
    },
    destinationPlace: {
        type: String,
        maxlength: 64
    },
    surcharge: {
        type: Number
    },
    description: {
        type: String,
        maxlength: 128
    }}, {
        timestamps: true
})

const TowingErrand = mongoose.model('TowingErrand', TowingErrandSchema)

module.exports = TowingErrand
