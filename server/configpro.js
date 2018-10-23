let opts = {
  port: 8000,
  apiPort: 8001,
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
      logging: false,
      timezone: '+08:00'
    }
  }
}

module.exports = opts
