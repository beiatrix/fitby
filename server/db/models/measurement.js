const Sequelize = require('sequelize')
const db = require('../db')

const Measurement = db.define('measurement', {
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Measurement
