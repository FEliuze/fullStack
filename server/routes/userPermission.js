const {UserPermission, MenuMid, Menu, User} = require('../model/index')
const {resJsonMaker} = require('../commons/utils')

module.exports = {
  '/': [{
    method: 'post',
    callback (request, response, next) {
    	let body = request.body
      let pname = body.pname
      let menus = body.menus
      let action = body.action
      let pid = body.id
      // userPermissions表填入name
      // 从返回值取得userPermissionId
      // 循环menus, menuMid表填入menuId userPermissionId isDelete
      if (action === 'add') {
      	UserPermission.findAll({
	  			where: {
	  				pname: pname,
            isDelete: 0
	  			}
	  		}).then((res) => {
	  			if (res.length) {
	  				response.json(resJsonMaker({message: 'exists'}, 'exists'))
	  				return
	  			}
	  			UserPermission.create({
	          pname: pname,
	          isDelete: 0
	      	}).then((res) => {
	      		let id = res.dataValues.id
	      		addToMenuMids(id)
	      	})
	  		})
      } else {
      	UserPermission.update({
          pname: pname
      	}, {
      		where: {
      			id: pid
      		}
      	}).then((res) => {
      		addToMenuMids(pid)
      	})
      }
      function addToMenuMids (id) {
      	let arr = []
      	menus.forEach((item) => {
      		arr.push({
	      		userPermissionId: id,
	      		isDelete: 0,
	      		menuId: item.id
	      	})
      	})
      	MenuMid.destroy({
      		where: {
      			userPermissionId: pid
      		}
      	}).then((result) => {
      		MenuMid.bulkCreate(arr).then((res) => {
	      		response.json(resJsonMaker({}, 'success'))
	      	})
      	})
      }
    }
  }, {
  	method: 'get',
  	callback (request, response, next) {
      let name = request.query.val
      let page = +request.query.page || 1
      let size = +request.query.size || 15
			let start = (page - 1) * size
      let where = { isDelete: 0 }
      if (name) {
        where.pname = {
          $like: `%${name}%`
        }
      }
			UserPermission.findAndCount({where: where}).then((count) => {
				UserPermission.findAll({
					where: where,
					offset: start,
					limit: size
				}).then((res) => {
					if (res.length) {
						response.json(resJsonMaker({result: res, total: count.count}, 'success'))
					} else {
						response.json(resJsonMaker({}, 'error'))
					}
				})
			})
  	}
  }],
  '/checkExist': [{
  	method: 'get',
  	callback (request, response, next) {
  		let name = request.query.name
  		UserPermission.findAll({
  			where: {
  				pname: name
  			}
  		}).then((res) => {
  			response.json(resJsonMaker(res.length, 'Query Success'))
  		})
  	}
  }],
  '/delete': [{
  	method: 'get',
  	callback (request, response, next) {
  		let id = request.query.id
      User.findAll({
        where: {
          userPermissionId: id
        }
      }).then((res) => {
        if (res && res.length) {
          response.json(resJsonMaker({message: 'inUse'}, 'Delete Success'))
        } else {
          UserPermission.update({
            isDelete: 1
          }, {
            where: {
              id: id
            }
          }).then(() => {
            MenuMid.destroy({
              where: {
                userPermissionId: id
              }
            }).then((res) => {
              response.json(resJsonMaker({message: 'success'}, 'Delete Success'))
            })
          })
        }
      })
  	}
  }],
  '/getRoleMenus': [{
  	method: 'get',
  	callback (request, response, next) {
			let id = +request.query.userPermissionId
      // console.log('=========id', id)
  		MenuMid.findAll({
        include: [Menu],
        where: {
          userPermissionId: id
        }
      }).then((res) => {
  			if (res.length) {
  				response.json(resJsonMaker(res, 'Query Success'))
  			} else {
  				response.json(resJsonMaker({message: 'error'}, 'Query Error'))
  			}
  		})
  	}
  }]
}