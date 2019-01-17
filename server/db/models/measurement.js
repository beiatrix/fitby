const Sequelize = require('sequelize')
const db = require('../db')

const Measurement = db.define('measurement', {
  category: {
    type: Sequelize.ENUM(
      'weight',
      'BMI',
      'body fat %',
      'chest',
      'waist',
      'hips',
      'thighs',
      'upper arms',
      'forearms',
      'calves'
    ),
    allowNull: false
  },
  data: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Measurement
