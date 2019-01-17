const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('note', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.ENUM('nutrition', 'fitness')
  }
})

module.exports = Note
