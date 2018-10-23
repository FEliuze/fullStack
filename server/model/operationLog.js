const Sequelize = require('sequelize')
const DB = require('../database/seq')

let operationLog = DB.define('operationLog', {
  // auto increment, primaryKey, unique
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  apiurl: Sequelize.STRING,
  apiparams: Sequelize.TEXT,
  apimethod: Sequelize.STRING,
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

module.exports = operationLog
