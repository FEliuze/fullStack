/**
 * Created by liuze on 16/9/11.
 * Mysql Config
 */

const mysql = require('mysql')
// const config = require('../config')
const config = require('../commons/getConfig')

module.exports = mysql.createPool(config.db.mysql)
