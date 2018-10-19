const p = require('../config/mysql')
const mysql = require('mysql')
const resInfo = {
    success: true,
    message: ''
}
const updateNavList = async (id, nav_name, nav_url, callback) => {
    await p.query(`update nav set nav_name = ${mysql.escape(nav_name)}, nav_url = ${mysql.escape(nav_url)} where id = ${mysql.escape(id)}`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '修改成功'
            } else {
                resInfo.success = false
                resInfo.message = '修改的数据已存在'
            }
        })
        .catch((err) => {
            resInfo.success = false
            resInfo.message = '修改失败'
            console.log('导航栏列表修改失败')
            return
        })
    callback && callback(resInfo)
}
module.exports = updateNavList
