const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    errandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Errand',
        required: true
    },
    data: { type: String, required: true }

})

const Image = mongoose.model('Image', ImageSchema)

module.exports = Image
