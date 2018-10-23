/**
 * Created by liuze on 16/9/11.
 * Models
 */

const DB = require('../database/seq')
const Session = require('./Session')
// const config = require('../config')
const config = require('../commons/getConfig')

// demo
const Person = require('./PersonTest')
const Menu = require('./menu')
const MenuMid = require('./menuMid')
const User = require('./user')
const UserPermission = require('./userPermission')
const OperationLog = require('./operationLog')
// const crypto = require('crypto'

UserPermission.hasMany(User)
User.belongsTo(UserPermission)

Menu.hasMany(MenuMid)
MenuMid.belongsTo(Menu)

UserPermission.hasMany(MenuMid)
MenuMid.belongsTo(UserPermission)

config.db.sequelize && DB.authenticate()
  .then(function () {
    // Create Model Relationship
    // ...
    // Flush DB or Flush Your Model
    // let decipher = crypto.createHash('md5')
    // let pass = decipher.update('123456').digest('base64')
    // User.create({
    //   name: '超级管理员',
    //   username: 'admin',
    //   password: pass,
    //   isDelete: 0,
    //   userPermissionId: 1,
    //   enablePassword: '123456'
    // })
    return DB.sync()
  })
  .then(function () {
    // Your Table Force Sync
    // force: true
  })
  .catch(function () {
    throw new Error('连接数据库失败')
  })

module.exports = { Session, Person, Menu, MenuMid, User, UserPermission, OperationLog }
