const p = require('../../../config/mysql')
const mysql = require('mysql')

module.exports = async (ctx) => {
    let OK = true
    let manager_name, manager_login_time
    if (ctx.session.isAdmin) {
        var {name} = ctx.session.isAdmin
    }
    await p.query(`select manager_name, manager_login_time from admin where manager_name = ${mysql.escape(name)}`)
        .then((data) => {
            if (data[0] === 0) {
                OK = false
            }
            manager_name = data[0].manager_name
            manager_login_time = data[0].manager_login_time
        })
        .catch((err) => {
            ctx.throw(err)
        })
    if (OK) {
        ctx.render('admin/index.html', {
            adminInfo: {
                manager_name: manager_name,
                manager_login_time :manager_login_time,
                manager_ip: ctx.host
            }
        })
    } else {
        ctx.redirect('/admin')
    }
}