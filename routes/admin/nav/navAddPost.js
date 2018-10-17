const p = require('../../../config/mysql')
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
        await p.query(`insert into nav values(${mysql.escape(Date.now() + Math.random())},${mysql.escape(value)},${mysql.escape(url)})`)
            .then((data) => {
                resInfo.success = true
                resInfo.message = '添加成功!'
                return
            })
            .catch((err) => {
                console.log('导航栏列表添加失败')
                ctx.throw(err)
            })
    }
    ctx.response.body = resInfo
}