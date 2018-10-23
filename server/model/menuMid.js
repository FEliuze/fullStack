const Sequelize = require('sequelize')
const DB = require('../database/seq')

let menuMid = DB.define('menuMid', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  menuId: Sequelize.INTEGER,
  userPermissionId: Sequelize.INTEGER,
  isDelete: Sequelize.INTEGER
})

module.exports = menuMid
