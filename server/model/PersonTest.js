const Sequelize = require('sequelize')
const DB = require('../database/seq')

let Person = DB.define('person', {
  // auto increment, primaryKey, unique
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  name: Sequelize.STRING,
  // comment
  sex: Sequelize.STRING,
  // allow null
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

module.exports = Person
