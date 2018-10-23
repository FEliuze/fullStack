/**
 * Restful, ApiDoc Demo
 * liuze
 * 2016.09.20
 */
const {resJsonMaker} = require('../../commons/utils')
const DB = require('../../database/mysql')

module.exports = {
  '/': [ {
    /**
     * @api {post} /api/demo-mysql Get Demo
     * @apiName GetDemo
     * @apiGroup Mysql-Demo
     *
     * @apiSuccess {Array} data 结果集
     */
    method: 'get',
    callback: function (req, res, next) {
      DB.getConnection(function (err, connection) {
        if (err) {
          return res.status(500).json(resJsonMaker('', 'Connection Error', true))
        }
        connection.query('select * from Sessions', function (err, rows) {
          if (err) {
            return res.status(500).json(resJsonMaker('', 'Query Error', true))
          }
          return res.json(resJsonMaker(rows, 'Query Success'))
        })
      })
    }
  } ]
}
