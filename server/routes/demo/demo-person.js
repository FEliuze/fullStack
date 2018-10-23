const {resJsonMaker} = require('../../commons/utils')
const {Person} = require('../../model/index')

module.exports = {
  '/': [ {
    /**
     * @api {get} /api/demo-person Get Person
     * @apiName GetPerson
     * @apiGroup PersonDemo
     *
     * @apiSuccess {String} data 结果集
     */
    method: 'get',
    callback: function (req, res, next) {
      Person.findAll({
        attributes: [ 'id', 'name' ],
        where: {
          // id: 1
        }
      }).then(function (result) {
        res.json(resJsonMaker({ result: result }, 'Get person'))
      })
    }
  }, {
    /**
     * @api {post} /api/demo-person Add Person
     * @apiName AddPerson
     * @apiGroup PersonDemo
     *
     * @apiParam {String} name 姓名
     * @apiParam {String} sex 性别
     * @apiParam {Text} description 描述
     *
     * @apiSuccess {String} data 结果集
     */
    method: 'post',
    callback: function (req, res, next) {
      Person.create(req.body).then(function (result) {
        res.json(resJsonMaker({ result: result }, 'Add a person'))
      })
    }
  }, {
    method: 'put', // update
    callback: function (req, res, next) {}
  }, {
    method: 'delete', // delete
    callback: function (req, res, next) {}
  } ]
}
