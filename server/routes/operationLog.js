const {resJsonMaker} = require('../commons/utils')
const {OperationLog} = require('../model/index')
const moment = require('moment')
module.exports = {
  '/find/:page/:size/:time/:username': [{
    method: 'get',
    callback (req, res, next) {
      let start = Number(req.params.size) * (req.params.page - 1)
      let where = {}
      if (req.params.time !== '' && req.params.time !== 'null') {
        let time1 = req.params.time
        let t = moment(req.params.time.split('-')).add(1, 'd').subtract(1, 'M').format('YYYY-MM-DD')
        let time2 = t
        where['loginTime'] = {'$gte': time1, '$lt': time2}
      }
      if (req.params.username !== '' && req.params.username !== 'null') {
        where['username'] = {'$eq': req.params.username}
      }
      OperationLog.findAll({
        'where': where,
        'order': [['id', 'DESC']],
        'limit': Number(req.params.size),
        'offset': start
      }).then(function (result) {
        res.json(resJsonMaker({ result: result }, 'Get logs'))
      })
    }
  }],
  '/count/:time/:username': [{
    method: 'get',
    callback (req, res, next) {
      let where = {}
      if (req.params.time !== '' && req.params.time !== 'null') {
        let time1 = req.params.time
        let t = moment(req.params.time.split('-')).add(1, 'd').subtract(1, 'M').format('YYYY-MM-DD')
        let time2 = t
        where['loginTime'] = {'$gte': time1, '$lt': time2}
      }
      if (req.params.username !== '' && req.params.username !== 'null') {
        where['username'] = {'$eq': req.params.username}
      }
      OperationLog.findAndCountAll({
        'where': where
      }).then(function (result) {
        res.json(resJsonMaker({ result: result }, 'Get logs'))
      })
    }
  }],
  '/createLog/': [{
    method: 'post',
    callback (req, response, next) {
      OperationLog.create(req.body).then(function (res) {
        response.json(resJsonMaker({ result: res }, 'create logs'))
      })
    }
  }],
  '/getLastLog': [{
    method: 'get',
    callback (req, res, next) {
      OperationLog.find({
        order: [['id', 'DESC']],
        limit: 1
      }).then((result) => {
        res.json(resJsonMaker({result: result}, 'query success'))
      })
    }
  }],
  '/getLogData/:page/:pageSize': [{
    method: 'get',
    callback (req, res, next) {
      // console.log(req.params.page)
      let page = +req.params.page
      let size = +req.params.pageSize
      let start = (page - 1) * size
      OperationLog.findAndCount({}).then((count) => {
        OperationLog.findAll({
            limit:  size,
            offset: start,
            order: [['id', 'DESC']]
        }).then(function (result) {
          res.json(resJsonMaker({ result: result, count: count.count }, 'get data success'))
        })
      })
    }
  }],
  '/searchPer/:data/:page/:pageSize': [{
    method: 'get',
    callback (req, res, next) {
      let page = +req.params.page
      let size = +req.params.pageSize
      let start = (page - 1) * size
      OperationLog.findAndCount({
        where: {
          username: {
            $like: `%${req.params.data}%`
          } 
        }
      }).then((count) => {
        OperationLog.findAll({
          limit:  size,
          offset: start,
          order: [['id', 'DESC']],
          where: {
            username: {
              $like: `%${req.params.data}%`
            } 
          }
        }).then((result) => {
          // console.log(result)
          res.json(resJsonMaker({ result: result, count: count}, 'get serach success'))
        })
      }) 
    }
  }],
  '/serachDate/:date/:date1/:page/:pageSize': [{
    method: 'get',
    callback (req, res, next) {
      let page = +req.params.page
      let size = +req.params.pageSize
      let start = (page - 1) * size
        OperationLog.findAndCount({
          where: {
            $and: [
              {createdAt: {gte: `%${req.params.date}%`}},
              {createdAt: {lte: `%${req.params.date1}%`}}
            ]
          }
        }).then((count) => {
          OperationLog.findAll({
            limit:  size,
            offset: start,
            order: [['id', 'DESC']],
            where: {
              $and: [
                {createdAt: {gte: `%${req.params.date}%`}},
                {createdAt: {lte: `%${req.params.date1}%`}}
              ]
            }
          }).then((result) => {
            // console.log(result)
            res.json(resJsonMaker({ result: result, count: count}, 'get serach success'))
          })
        })
      // if (req.params.date && req.params.date1) {
      //   OperationLog.findAndCount({
      //     where: {
      //       $and: [
      //         {createdAt: {gt: `%${req.params.date}%`}},
      //         {createdAt: {lt: `%${req.params.date1}%`}}
      //       ]
      //     }
      //   }).then((count) => {
      //     OperationLog.findAll({
      //       limit:  size,
      //       offset: start,
      //       order: [['id', 'DESC']],
      //       where: {
      //         $and: [
      //           {createdAt: {gt: `%${req.params.date}%`}},
      //           {createdAt: {lt: `%${req.params.date1}%`}}
      //         ]
      //       }
      //     }).then((result) => {
      //       // console.log(result)
      //       res.json(resJsonMaker({ result: result, count: count}, 'get serach success'))
      //     })
      //   })
      // } else if (req.params.date && !req.params.date1) {
      //   OperationLog.findAndCount({
      //     where: {
      //         createdAt: { $gt: `%${req.params.date}%`}
      //     }
      //   }).then((count) => {
      //     OperationLog.findAll({
      //       limit:  size,
      //       offset: start,
      //       order: [['id', 'DESC']],
      //       where: {
      //         createdAt: { $gt: `%${req.params.date}%`}
      //       }
      //     }).then((result) => {
      //       // console.log(result)
      //       res.json(resJsonMaker({ result: result, count: count}, 'get serach success'))
      //     })
      //   })
      // } else if (!req.params.date && req.params.date1) {
      //   OperationLog.findAndCount({
      //     where: {
      //         createdAt: { $lt: `%${req.params.date1}%`}
      //     }
      //   }).then((count) => {
      //     OperationLog.findAll({
      //       limit:  size,
      //       offset: start,
      //       order: [['id', 'DESC']],
      //       where: {
      //         createdAt: { $lt: `%${req.params.date1}%`}
      //       }
      //     }).then((result) => {
      //       // console.log(result)
      //       res.json(resJsonMaker({ result: result, count: count}, 'get serach success'))
      //     })
      //   })
      // }
    }
  }]
}
