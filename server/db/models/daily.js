const Sequelize = require('sequelize')
const db = require('../db')

const Daily = db.define('daily', {
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  done: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Daily
