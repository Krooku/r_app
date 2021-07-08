const TowingErrand = require('../models/TowingErrnad')


module.exports.insertPhotos = async (req, res) => {
  const { errandNumber, photos } = req.body

  if (!errandNumber || !photos) {
    return res.status(400).json({
      message: 'Incomplete request'
    })
  }

  const TowingErrand = new TowingErrand({ errandNumber, photos })

  try {
    await TowingErrand.save()
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
  res.status(200).end()
}