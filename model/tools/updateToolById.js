const p = require('../../config/mysql')
const mysql = require('mysql')
const updateToolById = async (tool) => {
    let resInfo = {
        success: false,
        message:''
    }
    await p.query(`update tools set tool_name = '${tool.tool_name}', tool_url = ${mysql.escape(tool.tool_url)} where tool_id = '${tool.tool_id}'`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '更新成功'
            } else {
                resInfo.success = false
                resInfo.message = '更新失败，与原数据一致'
            }
        })
        .catch((err) => {
            console.log('更新失败')
            console.log(err)
            resInfo.success = false
            resInfo.message = '更新失败'
        })
    return resInfo
}
module.exports = updateToolById
