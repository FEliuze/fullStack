/**
 * Created by liuze on 16/9/11.
 * Sequelize Config
 */

const Sequelize = require('sequelize')
// const config = require('../config')
const config = require('../commons/getConfig')

module.exports = new Sequelize(
  config.db.sequelize || {}
)
