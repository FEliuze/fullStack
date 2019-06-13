/**
 * Created by liuze on 16/9/20.
 * Router Index
 */

const express = require('express')
const menus = require('./menus')
const createRoute = require('../commons/createRoute')
const userPermission = require('./userPermission')
const user = require('./user')
const operationLog = require('./operationLog')
// 引入自定义路由

// 创建router
let router = express.Router()
// 路由拦截器
router.all('*', (request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  //
})
createRoute(router, user, '/user')
createRoute(router, menus, '/menus')
createRoute(router, userPermission, '/userPermission')
createRoute(router, operationLog, '/operationLog')

/* 安装自定义路由 */
/**
// MySql 使用实例 , 请注意配置 config.js db.mysql
import DemoMysql from './demo/demo-mysql'
createRoute(router, DemoMysql, '/demo-mysql')
*/

/**
// Sequelize 使用实例 , 请注意配置 config.js db.sequelize
import DemoPerson from './demo/demo-person'
createRoute(router, DemoPerson, '/demo-person')
*/

module.exports = router
