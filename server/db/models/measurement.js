const Sequelize = require('sequelize')
const db = require('../db')

const Measurement = db.define('measurement', {
  category: {
    type: Sequelize.ENUM(
      'weight',
      'body fat %',
      'waist',
      'lower abs',
      'hips',
      'thighs',
      'chest',
      'arms'
    ),
    allowNull: false
  },
  data: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Measurement
