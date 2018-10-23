/**
 * Restful, ApiDoc Demo
 * liuze
 * 2016.09.20
 */
const {resJsonMaker} = require('../../commons/utils')

module.exports = {
  '/:time/': [ {
    /**
     * @api {get} /api/demo-url/:time Get Demo
     * @apiName GetDemo
     * @apiGroup URL-Demo
     *
     * @apiParam {Number} time 获取请求发起时间
     *
     * @apiSuccess {String} data 结果集
     */
    method: 'get',
    callback: function (req, res, next) {
      let time = req.params.time
      res.json(resJsonMaker({
        time: time
      }, 'Get Test'))
    }
  }, {
    /**
     * @api {post} /api/demo-url/:time Post Demo
     * @apiName PostDemo
     * @apiGroup URL-Demo
     *
     * @apiParam {Number} time 获取请求发起时间
     * @apiParam {String} name 名称
     * @apiParam {String} test 测试参数
     *
     * @apiSuccess {String} data 结果集
     */
    method: 'post',
    callback: function (req, res, next) {
      let time = req.params.time // 获取url参数
      let name = req.body.name // 获取post参数
      let test = req.query.test // 获取URL参数(eq: ?a=b...)
      res.json(resJsonMaker({
        time: time,
        name: name,
        test: test
      }, 'Post Test'))
    }
  } ]
}
