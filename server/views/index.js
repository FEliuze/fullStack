/**
 * Created by liuze on 16/9/20.
 * 配置页面路由
 */

const express = require('express')
const session = require('../commons/session')
// const config = require('../config')
const config = require('../commons/getConfig')
let router = express.Router()
// api page
if (process.env.NODE_ENV !== 'production') {
  router.get('/apidoc/', function (req, res, next) {
    res.render('sys.apidoc.ejs', {
      url: config.secheme + '://' + req.hostname + ':' + config.apiPort + '/'
    })
  })
}

// index page
router.get([ '/index' ], function (req, res, next) {
  res.render('sys.index.ejs')
})

// client page
router.get([ '/', /\/page/ ], session.check, function (req, res, next) {
  res.render('index.html')
})

module.exports = router
