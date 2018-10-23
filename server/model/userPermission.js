const Sequelize = require('sequelize')
const DB = require('../database/seq')

let userPermission = DB.define('userPermission', {
  // auto increment, primaryKey, unique
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  pname: Sequelize.STRING,
  isDelete: Sequelize.INTEGER
})

module.exports = userPermission
