const p = require('../../../config/mysql')
const mysql = require('mysql')
const resInfo = {
    valid: false,
    message: ''
}
var isAdmin = {
    name: ''
}
module.exports = async (ctx) => {
    const {username, password} = ctx.request.body
    const date = new Date();
    await p.query(`select * from admin where manager_name = ${mysql.escape(username)} and manager_password = ${mysql.escape(password)}`).then((data) => {
        if (data.length === 0) {
            resInfo.valid = false
            resInfo.message = '账号或密码错误'
        } else {
            const {manager_name} = data[0]
            resInfo.valid = true
            isAdmin.name = manager_name
        }
    }).catch((err) => {
        ctx.throw(err)
    })
    await p.query(`update admin set manager_login_time = ${mysql.escape(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())} where manager_name = ${mysql.escape(username)}`)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            ctx.throw(err)
        })
    if (resInfo.valid && isAdmin.name !== '') {
        ctx.session.isAdmin = isAdmin
        ctx.body = JSON.stringify(resInfo)
    } else {
        ctx.body = JSON.stringify(resInfo)
    }
}