const mongoose = require('mongoose');

const CounterSchema = mongoose.Schema({
    // _id: { type: String, unique: true },
    quantity: { type: Number, default: 1, min: 0 },
    nextModelId: { type: Number, default: 1}

})

// CounterSchema.index({ _id: 1, quantity: 10000, nextModelId: 10000 }, { unique: true })

const Counter = mongoose.model('Counter', CounterSchema);

const AutoIncrement = async function (counterName, doc, next) {
    try {
        const counter = await Counter.findByIdAndUpdate(
            { _id: counterName }, 
            { $inc: { quantity: 1, nextModelId: 1 }}, 
            { new: true, upsert: true },
            /*(err, counter) => {
                console.log(2)
                if (err) return err
                console.log(counter.nextModelId)
                doc.id = counter.nextModelId
                next()
            } */
        ).exec()
        doc.id = counter.nextModelId
        next()
    } catch(err) {
        next(err)
    }
    console.log(3)
}

const AutoDecrement = (counterName, next) => {
    Counter.findByIdAndUpdate(
        { _id: counterName }, 
        { $inc: { quantity: -1 }}, 
        {new: true, upsert: true }
    ).then(counter => {
        return counter.quantity
    }).catch(err => {
        return next(err)
    })
}

module.exports = { AutoIncrement, AutoDecrement }