const conn = require("../sql/db.js")
const moment = require("moment")

const register = (req, res) => {
    res.render('./user/register.ejs', {})
}
const login = (req, res) => {
    res.render('./user/login.ejs', {})
}
const register1 = (req, res) => {
    const body = req.body

    if (body.username.trim().length <= 0 || body.password.trim().length <= 0 || body.nickname.trim().length <= 0) {
        return res.send({ msg: '请填写完整的信息', status: 501 })
    }
    console.log(req.body);

    const sql1 = 'select count(*) as count from blog where username=?'
    conn.query(sql1, body.username, (err, result1) => {

        if (err) {
            return res.send({ msg: '用户名查看失败!', status: 502 })
        }

        if (result1[0].count !== 0) {
            return res.send({ msg: '请更换用户名!', status: 503 })
        }

        body.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
        const sql2 = 'insert into blog set ?'
        conn.query(sql2, body, (err, result) => {
            if (err) {
                return res.send({ msg: '请更换用户名!', status: 503 })
            }

            console.log('-------------')
            console.log(result)

            if (result[0].affectedRows !== 1) {
                return res.send({ msg: '注册失败!', status: 505 })
            }
            res.send('ok')
        })
    })
}
const login1 = (req, res) => {

}

module.exports = {
    register,
    login,
    register1,
    login1
}