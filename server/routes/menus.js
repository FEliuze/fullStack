const {Menu} = require('../model/index')
const {resJsonMaker} = require('../commons/utils')

module.exports = {
  '/': [{
    method: 'get',
    callback (request, response, next) {
      let userPomissionId = request.query.userPomissionId
      let obj = {}
      if (userPomissionId) obj.userPomissionId = userPomissionId
      Menu.findAll(obj).then((result) => {
        if (result && result.length) {
          response.json(resJsonMaker(result, 'Query Success'))
        } else {
          response.json(resJsonMaker({message: 'error'}, 'Query Error'))
        }
      })
    }
  }, {
    method: 'post',
    callback (request, response, next) {
      let body = request.body
      let tag = body.tag
      if (tag === 'insert') {
        Menu.create({
          name: body.name,
          link: body.link,
          icon: body.icon,
          parentId: body.parentId
        }).then((res) => {
          response.json(resJsonMaker({message: 'success'}, 'Insert Success'))
        })
      } else if (tag === 'update') {
        Menu.update({
          name: body.name,
          link: body.link,
          icon: body.icon,
          parentId: body.parentId
        }, {
          where: {
            id: body.id
          }
        }).then((res) => {
          response.json(resJsonMaker({message: 'success'}, 'Update Success'))
        })
      }
    }
  }]
}