const express = require('express')
const bodyParser = require("body-parser")


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
    // 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
    // 设置模板页面的存放路径
app.set('views', './views')
app.use('/node_modules', express.static('node_modules'))

const router = require('./router/index.js')
    // 注册路由模块
app.use(router)
const router1 = require('./router/user.js')
    // 注册路由模块
app.use(router1)

app.listen(3000, () => {
    console.log("服务器运行成功……")
})