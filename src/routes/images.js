const Image = require('../models/Image')

module.exports.addImage = async (req, res) => {
    const { errandId, img } = req.body
    if (!errandId || !img) {
        return res.status(400).json({
            message: 'Incomplete request'
        })
    }

    const image = new Image({ errandId, data: img })
    try {
        await image.save()
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
              message: '???'
            })
        }
        return res.status(500).json({
            message: 'Database error',
            error: error
        })
    }
    res.status(200).json(image.errandId)
}

module.exports.getImages = async (req, res) => {
    console.log(req.params)
    const { id } = req.params
    if (!id) {
        return res.status(400).json({
          message: 'Incomplete request'
        })
    }

    await Image.find({ errandId: id }, 'data').lean().exec().then(images => {
      res.status(200).json(images)
    }).catch(err => {
        console.log(err)
      return res.status(500).json({
        message: 'Database error',
        err
    })
  })
}