let opts = {
  port: 8001,
  apiPort: 8002,
  db: {
    mysql: {
      host: '',
      user: '',
      port: '',
      password: '',
      database: '',
      connectionLimit: 10, // 连接池上限
      multipleStatements: true // 多语句组合
    },
    sequelize: {
      dialect: '', // 数据库类型
      host: '',
      port: '',
      username: '',
      password: '',
      database: '',
      timezone: '+08:00'
    }
  }
}

module.exports = opts
