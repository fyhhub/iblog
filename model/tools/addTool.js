const mysql = require('mysql')
const p = require('../../config/mysql')
const md5 = require('blueimp-md5')
const resInfo = {
    success: true,
    message: ''
}
const addNav = async (tool) => {
    await p.query(`insert into tools values('${md5(Date.now()).substring(20)}',${mysql.escape(tool.tool_name)},${mysql.escape(tool.tool_url)})`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '添加成功!'

            }
        })
        .catch((err) => {
            console.log('工具添加失败')
            resInfo.message = '工具添加失败!'
            console.log(err)
        })
    return resInfo
}
module.exports = addNav