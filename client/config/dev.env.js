'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
    '/api': {
      // 测试环境
      target: 'http://127.0.0.1:8001', // 接口域名
      changeOrigin: true, // 是否跨域
      pathRewrite: {
        '/api': '/api' // 需要rewrite重写的,
      }
    }
  }
})
