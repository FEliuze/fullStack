/**
 * Created by liuze on 16/9/18.
 */
const Sequelize = require('sequelize')
const DB = require('../database/seq')
// const config = require('../config')
const config = require('../commons/getConfig')

let Session = config.session.status === 'off' ? null : DB.define(
  'Session', {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    expires: Sequelize.DATE,
    data: Sequelize.STRING(20000)
  }, {
    tableName: 'Session',
    timestamps: false
  }
)

module.exports = Session
