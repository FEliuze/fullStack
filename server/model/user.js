const Sequelize = require('sequelize')
const DB = require('../database/seq')

let user = DB.define('user', {
  // auto increment, primaryKey, unique
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  isDelete: Sequelize.INTEGER,
  userPermissionId: Sequelize.INTEGER,
  enablePassword: Sequelize.STRING,
  fatherId: Sequelize.INTEGER
})

module.exports = user
