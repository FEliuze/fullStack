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

module.exports = function (app) {
  let accessLogDirectory = config.path.logsAbs
  fs.existsSync(accessLogDirectory) || fs.mkdirSync(accessLogDirectory)
  let accessLogStream = FileStreamRotator.getStream({
    filename: path.join(accessLogDirectory, 'Access-%DATE%.log'),
    date_format: 'YYYY-MM-DD',
    frequency: 'daily',
    verbose: false
  })
  app.use(morgan('combined', { stream: accessLogStream }))
}
