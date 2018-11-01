const mysql = require('mysql')
const p = require('../../config/mysql')
const resInfo = {
    success: true,
    message: ''
}
const addNav = async (value, url) => {
    await p.query(`insert into nav values(${mysql.escape(Date.now() + Math.random())},${mysql.escape(value)},${mysql.escape(url)})`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '添加成功!'
            }
        })
        .catch((err) => {
            console.log('导航栏列表添加失败')
            console.log(err)
        })
    return resInfo
}
module.exports = addNav