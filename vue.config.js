
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    configureWebpack: {
        // 在webpack的name字段中提供应用的标题，以便它可以在index.html中访问，以注入正确的标题。
        resolve: {
          alias: {
            '@': resolve('src') // 绝对路径配置
          }
        },
    }
}