'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APIPATH: '"https://vue-course-api.hexschool.io"',
  CUSTOMPATH: '"nechen0814"',
})
// 自定義的環境變數：APIPATH，CUSTOMPATH