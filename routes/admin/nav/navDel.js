const p = require('../../../config/mysql')
const mysql = require('mysql')
const resInfo = {
    success: false,
    message: ''
}
module.exports = async (ctx) => {
    let {id} = ctx.request.query
    await p.query(`delete from nav where id = ${mysql.escape(id)}`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '删除成功'
            } else {
                resInfo.success = false
                resInfo.message = '删除的导航栏元素不存在'
            }
        })
        .catch((err) => {
            console.log('删除导航栏元素失败')
            ctx.throw(err)
        })
    ctx.body = resInfo
}