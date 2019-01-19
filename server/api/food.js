const router = require('express').Router()
const {Food} = require('../db/models')
module.exports = router

//authentication
function isAuthenticated(req, res, next) {
  if (req.user.id) {
    return next()
  } else {
    res.status(403).end()
  }
}

// GET /api/food
router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    //eventually, find all where date === today
    const foods = await Food.findAll({
      where: {userId: req.user.id}
    })
    res.json(foods)
  } catch (err) {
    next(err)
  }
})

// POST /api/food
router.post('/', async (req, res, next) => {
  try {
    const foodData = req.body
    foodData.userId = req.user.id
    console.log('in express route', req.body)
    const food = await Food.create(foodData)
    res.json(food)
  } catch (err) {
    next(err)
  }
})
