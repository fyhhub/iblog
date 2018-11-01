const p = require('../../../config/mysql')
const addNav = require('../../../model/nav/addNav')
const mysql = require('mysql')
const resInfo = {
    success: true,
    message: ''
}
module.exports = async (ctx) => {
    let {value, url} = ctx.request.body
    resInfo.success = true
    await p.query(`select nav_name from nav where nav_name = ${mysql.escape(value)}`)
        .then((data) => {
            console.log(data)
            if (data.length !== 0) {
                resInfo.success = false
                resInfo.message = '该导航已存在!'
            }
        })
        .catch((err) => {
            console.log('导航栏列表查询失败')
            ctx.throw(err)
        })
    if (resInfo.success) {
        let info = await addNav(value, url)
        ctx.response.body = info
    }
    ctx.response.body = resInfo
}