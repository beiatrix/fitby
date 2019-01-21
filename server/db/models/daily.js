const Sequelize = require('sequelize')
const db = require('../db')

const Daily = db.define('daily', {
  name: {
    type: Sequelize.ENUM('cardio', 'weights', 'stretching'),
    allowNull: false
  },
  done: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Daily
