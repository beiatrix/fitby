const router = require('express').Router()
const {Measurement} = require('../db/models')
module.exports = router

//authentication
function isAuthenticated(req, res, next) {
  if (req.user.id) {
    return next()
  } else {
    res.status(403).end()
  }
}

// GET /api/measurements
router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    // this finds all measurements by user
    const measurements = await Measurement.findAll({
      where: {userId: req.user.id},
      order: [['createdAt', 'ASC']] // sorts in chronological order :)
    })
    res.json(measurements)
  } catch (err) {
    next(err)
  }
})

// POST /api/measurements
router.post('/', async (req, res, next) => {
  try {
    const measurementData = req.body
    measurementData.userId = req.user.id
    console.log('in express route', req.body)
    const measurements = await Measurement.create(measurementData)
    res.json(measurements)
  } catch (err) {
    next(err)
  }
})
