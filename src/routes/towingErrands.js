const TowingErrand = require('../models/TowingErrand')

module.exports.insertTowingErrand = async (req, res) => {
    const userId = req.session.user.id
    const { errandNumber, carNumber, tugNumber } = req.body
    if (!errandNumber) {
        return res.status(400).json({
            message: 'Incomplete request'
        })
    }

    const towingErrand = new TowingErrand({ userId, errandNumber, carNumber, tugNumber })
    try {
        await towingErrand.save()
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
    res.status(200).json(towingErrand)
}

module.exports.updateTowingErrandDrive = async (req, res) => {
    const { errandId, kilometers, date, DMC, incidentPlace, photos, transport, description } = req.body
    console.log(date)
    if (!errandId) {
    return res.status(400).json({
        message: 'Incomplete request'
    })
    }

    const towingErrand = await TowingErrand.findOneAndUpdate({
    _id: errandId
    }, {
        'kilometers.drive': kilometers,
        'journey.drive': date,
    DMC,
    incidentPlace,
    photos,
    transport,
    description
    }, {
    new: true
    }).exec()

    if (!towingErrand) {
    res.status(400).json({
        message: 'Errand does not exist or no permission'
    })
    }
    res.status(200).json(towingErrand)
}

module.exports.updateTowingErrandTowing = async (req, res) => {
    const { errandId, kilometers, date, destinationPlace, handed, description } = req.body
    console.log(date)
    if (!errandId) {
    return res.status(400).json({
        message: 'Incomplete request'
    })
    }

    const towingErrand = await TowingErrand.findOneAndUpdate({_id: errandId},
    {
        'kilometers.towing': kilometers,
        'journey.towing': date,
        destinationPlace: destinationPlace,
        handed: handed,
        description: description
    },
    { new: true }
    ).exec()

    if (!towingErrand) {
    res.status(400).json({
        message: 'Errand does not exist or no permission'
    })
    }
    res.status(200).json(towingErrand)
}

module.exports.updateTowingErrandReturn = async (req, res) => {
    const { errandId, kilometers, date, surcharge, description } = req.body
    console.log(date)
    if (!errandId) {
    return res.status(400).json({
        message: 'Incomplete request'
    })
    }

    const towingErrand = await TowingErrand.findOneAndUpdate({_id: errandId},
    {
        'kilometers.return': kilometers,
        'journey.return': date,
        surcharge: surcharge,
        description: description
    },
    { new: true }
    ).exec()

    if (!towingErrand) {
        res.status(400).json({
            message: 'Errand does not exist or no permission'
        })
    }
    res.status(200).json(towingErrand)
}

module.exports.updateStatus = async (req, res) => {
    const { errandId, status } = req.body
    if (!errandId || !status) {
        return res.status(400).json({
            message: 'Incomplete request'
        })
    }

    const towingErrand = await TowingErrand.findOneAndUpdate({_id: errandId},
    {
        status: status
    },
    { new: true }
    ).exec()

    if (!towingErrand) {
        res.status(400).json({
            message: 'Errand does not exist or no permission'
        })
    }
    res.status(200).json(towingErrand._id)
}

module.exports.addImage = async (req, res) => {
    const { errandId, image } = req.body
    if (!errandId || !image) {
        return res.status(400).json({
            message: 'Incomplete request'
        })
    }
    const towingErrand = await TowingErrand.findOneAndUpdate({_id: errandId},
    { $push: { photos: image } },
    { new: true }
    ).exec()

    if (!towingErrand) {
        res.status(400).json({
            message: 'Errand does not exist or no permission'
        })
    }
    console.log('zapisano zdj')
    res.status(200).json(towingErrand.photos.length)
}

module.exports.insertPhotos = async (req, res) => {
  const { errandNumber, photos } = req.body
  if (!errandNumber || !photos) {
    return res.status(400).json({
      message: 'Incomplete request'
    })
  }

  const towingErrand = new TowingErrand({ errandNumber, photos })

  try {
    await towingErrand.save()
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
  res.status(200).json(towingErrand)
}

module.exports.getTowingErrand = async (req, res) => {
    const { id } = req.params
  
    if (!id) {
      return res.status(400).json({
        message: 'Incomplete request'
      })
    }
    

    await TowingErrand.findOne({
        _id: id
        }).exec().then(errand => {
            res.status(200).json(errand)
        }).catch(err => {
            return res.status(404).json({
                message: 'Errand does not exist'
            })
        })
  }
  module.exports.listTowingErrands = async (req, res) => {
    console.log(req.session.user.role)
    let filter = { _id: req.session.user.id }
    if (req.session.user.role !== 'ADMIN') {
        filter = {}
    }
    await TowingErrand.find(filter, 'errandNumber status').lean().populate('userId', 'username').exec().then(towingErrands => {
      res.status(200).json(towingErrands)
    }).catch(err => {
      return res.status(500).json({
        message: 'Database error',
        err
    })
  })
  }