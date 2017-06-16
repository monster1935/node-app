# node-app
study node app

## 使用的工具包
- express-generator 快速生成express项目
- supervisor 监听代码变化，热替换
- axios 用于前端请求
- mongoose 用于连接mongodb

## 配合vue-cli搭建前端页面

- webapps 存放了前端的文件，包括源代码以及webpack相关打包逻辑
- webapps-config-index.js下配置了关于请求的代理配置
- webapps-config-index.js下配置执行build命令时将页面打包到node下的public目录
