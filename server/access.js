/**
 * Created by xufenghcao on 16/7/11.
 * Access Log
 */

const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const FileStreamRotator = require('file-stream-rotator')
// const config = require('./config')
const config = require('./commons/getConfig')
const jwtDecode = require('jwt-decode')
const {OperationLog} = require('./model/index')

module.exports = function (app) {
  let accessLogDirectory = config.path.logsAbs
  fs.existsSync(accessLogDirectory) || fs.mkdirSync(accessLogDirectory)
  let accessLogStream = FileStreamRotator.getStream({
    filename: path.join(accessLogDirectory, 'Access-%DATE%.log'),
    date_format: 'YYYY-MM-DD',
    frequency: 'daily',
    verbose: false
  })
  app.use(morgan(function (tokens, req, res) {
    let authorization = tokens.req(req, res, 'authorization')
    // console.log(authorization)
    let userInfo = authorization && jwtDecode(authorization.split(' ')[1])
    // console.log(userInfo)
    const obj = {
      name: userInfo ? userInfo.data.name : '',
      username: userInfo ? userInfo.data.username : '',
      apiurl: tokens.url(req, res),
      apiparams: '',
      apimethod: tokens.method(req, res),
      description: ''
    }
    OperationLog.create(obj)
      .then((res) => {
        console.log('created')
      }).catch((e) => {
        console.log('create error')
      })
    // console.log('obj', obj)
  }))
  app.use(morgan('combined', { stream: accessLogStream }))
}
