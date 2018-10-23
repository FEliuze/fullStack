const express = require('express')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const accessLog = require('./access')
const config = require('./commons/getConfig')
const jwt = require('express-jwt')
const {logs, resJsonMaker, getCompleteUrl} = require('./commons/utils')
const session = require('./commons/session')
const routersProcess = require('./routes/index')
const viewsProcess = require('./views/index')
// 文件上传
const multipart = require('connect-multiparty')
require('./model/index')
let _logs = logs('APP')
let app = express()
let upload = multipart()

app.disable('x-powered-by')
// 启用访问日志
accessLog(app)

// set port
// app.set('port', config.port)
// app.set('apiPort', config.port + 1)

// view engine setup
app.set('views', config.path.viewsAbs)
app.engine('.html', ejs.__express)
app.set('view engine', 'html')
console.log(123456789)
// static
app.use(express.static(config.path.publicAbs))

// favicon
app.use(favicon(config.path.faviconAbs))

// bodyParser
app.use(bodyParser.json({
  limit: config.limit
}))
app.use(bodyParser.urlencoded({
  extended: false,
  limit: config.limit
}))

// cookieParser
app.use(cookieParser())

// session
app.use(session.init() || function (req, res, next) {
  next()
})

// view routers
app.use(viewsProcess)

// routers
app.use(/\/api/, upload, routersProcess)

// Error handler
app.use(function (req, res) {
  _logs('404:`' + getCompleteUrl(req) + '`')
  if (req.xhr) {
    res.status(404).json(resJsonMaker('', '404 Not Found', true))
  } else {
    res.status(404).render('sys.error.ejs', { title: config.app.title, message: '404 Not Found' })
  }
})

app.use(jwt({
  secret: 'YplSec',
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  }
}).unless({path: ['/api/user/login/']}))

module.exports = app
