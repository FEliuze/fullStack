const {resJsonMaker} = require('../commons/utils')
// const session = require('../commons/session')
const {User, UserPermission} = require('../model/index')
const crypto = require('crypto')
const jsonwebtoken = require('jsonwebtoken')
const moment = require('moment')
// const getDbConnect = require('../database/mysql'

module.exports = {
  '/login/': [ {
    method: 'post',
    callback (req, res, next) {
      let decipher = crypto.createHash('md5')
      let username = req.body.username
      let password = req.body.password
      password = decipher.update(password).digest('base64')
      User.findAll({
        include: [UserPermission],
        where: {
          username: username,
          password: password,
          isDelete: 0
        }
      }).then((result) => {
        let token
        if (result && result.length) {
          let userInfo = result[0]
          let user = {
            name: result[0].name,
            username: result[0].username
          }
          token = jsonwebtoken.sign({data: user}, 'YplSec')
        }
        // console.log('result=======', result)
        res.json(resJsonMaker({ result: result, token: token }, 'Get user'))
      })
    }
  }],
  '/': [{
    method: 'get',
    callback (req, res, next) {
      let name = req.query.val || ''
      let fatherId = +req.query.id || 1
      let page = +req.query.page || 1
      let size = +req.query.size || 20
      let start = (page - 1) * size
      let all = req.query.all
      let where = {
        isDelete: 0,
        fatherId: fatherId
      }
      if (name) {
        where.$or = [
          {
            username: {
              $like: `%${name}%`
            },
          },
          {
            name: {
              $like: `%${name}%`
            }
          }
        ]
      }
      if (all) {
        where = {
          isDelete: 0
        }
        User.findAll({
          where: where
        }).then((result) => {
          res.json(resJsonMaker({ result: result }, 'Get user'))
        })
        return
      }
      if (fatherId && fatherId !== 1) {
        where.fatherId = fatherId
      }
      // console.log('where', where)
      User.findAndCount({where: where}).then((count) => {
        User.findAll({
          where: where,
          offset: start,
          limit: size
        }).then((result) => {
          res.json(resJsonMaker({ result: result, total:count.count }, 'Get user'))
        })
      })
    }
  }, {
    method: 'post',
    callback (req, res, next) {
      let decipher = crypto.createHash('md5')
      let decipher2 = crypto.createHash('md5')
      let body = req.body
      let password = decipher.update(body.enablePassword).digest('base64')
      let newPassword = body.rePwd ? decipher2.update(body.rePwd).digest('base64') : 's'
      let action = body.action
      let fatherId = +body.fatherId
      let permissID = +body.userPermissionId
      let obj = action === 'add' ? {
        name: body.name,
        username: body.username,
        password: password,
        isDelete: 0,
        userPermissionId: permissID,
        enablePassword: body.enablePassword,
        fatherId: fatherId
      } : (!body.rePwd && permissID === 0 ? {
        name: body.name
      } : (!body.rePwd ? {
        name: body.name,
        userPermissionId: permissID
      } : (permissID === 0 ? {
        name: body.name,
        password: newPassword,
        enablePassword: body.rePwd
      } : {
        name: body.name,
        password: newPassword,
        userPermissionId: permissID,
        enablePassword: body.rePwd
      })))
      User.findAndCount({
        where: {
          username: body.username,
          isDelete: 0
        }
      }).then((count) => {
        if (action === 'add') {
          if (count.count > 0) {
            res.json(resJsonMaker({ message: 'exist' }, 'Post user'))
          } else {
            User.create(obj).then((result) => {
              res.json(resJsonMaker({ result: result, message: 'success' }, 'Post user'))
            })
          }
        } else {
          User.update(obj, { where: {id: body.id}})
          .then((result) => {
            res.json(resJsonMaker({ result: result, message: 'success' }, 'Post user'))
          })
        }
      })
    }
  }],
  '/delete/:id': [{
    method: 'get',
    callback: function (req, res, next) {
      User.destroy({
        where: {
          id: req.params.id
        }
      }).then((data) => {
        res.json(resJsonMaker({ result: data, message: 'success' }, 'Delete user'))
      })
    }
  }],
  '/updateUserPass': [ {
    method: 'post',
    callback (req, res, next) {
      let decipher = crypto.createHash('md5')
      let decipher2 = crypto.createHash('md5')
      let params = req.body || {}
      params.oldPwd = decipher.update(params.oldPwd).digest('base64')
      params.newPwd = decipher2.update(params.newPwd).digest('base64')
      User.findOne({
        where: {
          password: params.oldPwd
        }
      }).then((row) => {
        if (row) {
          User.update({
            password: params.newPwd
          }, {
            where: {
              id: params.id
            }
          }).then((result) => {
            res.json(resJsonMaker({ ok: true, pass: 'right', result: result }, 'update a userPass'))
          })
        } else {
          res.json(resJsonMaker({ ok: false, pass: 'wrong', result: [] }, 'update a userPass'))
        }
      })
    }
  }],
  '/userID/:userId': [{
    method: 'get',
    callback: function (req, res, next) {
      User.findOne({
        where: {
          id: req.params.userId
        }
      }).then(function (data) {
        res.json(resJsonMaker({result: data}, 'find a userId data'))
      })
    }
  }]
}
