const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('note', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Note
