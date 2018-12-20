# main packages
* react16, react-router, redux
* express4.x
* webpack4
* babel 7.x
* axios, nodemon
# 运行(localhost:3000)
以下三个命令同时运行(run together)  
`npm run start`  
`npm run build:server`  
`npm run build:client`
# 目录结构
* build: webpack配置
* dist/public: 打包后的内容(bundled files)
* src  
  * components: 公用组件  
  * containers: 各个组件
    * store：模块化处理store
  * router: 路由  
  * server/client: 服务器/客户端渲染
  * store: 利用redux存储数据
# 从简单到复杂的分支顺序
webpack → router → redux → serverRedux
## webpack 
webpack配置react客户端和服务端
## router
add react-router
## redux
add redux, react-redux（客户端）
## serverRedux
增加redux服务端渲染
更多内容查看各部分代码注释
