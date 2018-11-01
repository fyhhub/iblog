const p = require('../../config/mysql')
const delToolById = async (tool_id) => {
    let resInfo = {
        success: false,
        message: ''
    }
    await p.query(`delete from tools where tool_id = '${tool_id}'`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '删除成功'
            }
            if (data.affectedRows == 0) {
                resInfo.success = false
                resInfo.message = '删除的工具不存在'
            }
        })
        .catch((err) => {
            console.log(err)
            console.log('删除工具失败')
            resInfo.success = false
            resInfo.message = '删除失败'
        })
    return resInfo
}
module.exports = delToolById
