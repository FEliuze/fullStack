let opts = {
  port: 8000,
  apiPort: 8001,
  db: {
    mysql: {
      host: '192.168.1.118',
      user: 'cloud_manager',
      port: 3358,
      password: 'Yplsec.com',
      database: 'ypl_framework',
      connectionLimit: 10, // 连接池上限
      multipleStatements: true // 多语句组合
    },
    sequelize: {
      dialect: 'mysql', // 数据库类型
      host: '192.168.1.118',
      port: '3358',
      username: 'cloud_manager',
      password: 'Yplsec.com',
      database: 'ypl_framework',
      logging: false,
      timezone: '+08:00'
    }
  }
}

module.exports = opts
