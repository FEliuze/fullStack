### 安装
* `npm install`

### 前言
* 不需要后端接口服务可只启动前端服务
* 需要后端接口，需配置数据库类型和地址

### 如何使用
* 编译前端代码且启动服务 `npm run start`
* 启动服务(默认pro) `npm run serv`
* 启动服务(dev) `npm run serv-dev`
* 启动前端代码实时编译 `npm run dev`
* 启动前端代码一次性编译 `npm run build`
* 前端测试 `npm run test`

### 自定义配置
* 前端配置文件: `client/config`
  端口监听、资源引入、请求转发等
* 后端配置文件: `server/config.js`
  端口监听、数据库配置等

### 前端开发
* 文件夹client
* 静态文件/static
* webpack配置/build
* 插件/plugins
* 入口文件/src/main.js
* 公用文件/src/commons
* 组件/src/components
* 路由/src/router
* 静态资源/src/assets

### 前端build编译后文件位置
* public/dist

### 后端
* 文件夹server
* 配置文件/app.js
* 服务/bin/www.js
* 公共文件/commons
* 数据库配置/database
* sequlize配置/model
* 路由配置/routes/index.js
* 入口文件/views/index.js

### 版本介绍
* 前端vue-cli2
* 后端登录验证机制jwt
