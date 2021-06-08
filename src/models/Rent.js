const mongoose = require('mongoose')

const { AutoIncrement, AutoDecrement } = require('./Counter')

const RentSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userIdStart: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userIdEnd: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    name: {
        type: String,
        default: 'prywatne'
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    days: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

RentSchema.pre('save', async function (next) {
    if(!this.isNew) { console.log('It`s not a new document of rent.'); return next()}
    console.log('PRZED')
    await AutoIncrement('RentsCounter', this, next).then( () => {
        console.log(`Id of rent is equal ${this.id}`)
    }).catch(err => {
        console.log('error')
        return next(err)
    })
    console.log('po')

})

const Rent = mongoose.model('Rent', RentSchema)

module.exports = Rent