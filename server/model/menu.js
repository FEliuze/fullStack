const Sequelize = require('sequelize')
const DB = require('../database/seq')

let menu = DB.define('menu', {
  // auto increment, primaryKey, unique
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  name: Sequelize.STRING,
  link: Sequelize.STRING,
  icon: Sequelize.STRING,
  parentId: Sequelize.INTEGER
})

module.exports = menu
