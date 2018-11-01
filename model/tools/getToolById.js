const p = require('../../config/mysql')
const getToolById = async (tool_id) => {
    let tool = {}
    await p.query(`select tool_name, tool_url from tools where tool_id = '${tool_id}'`)
        .then((data) => {
            if (data.length == 0) {
                console.log('该工具不存在!')
            } else {
                tool.tool_name = data[0].tool_name
                tool.tool_url = data[0].tool_url
            }
        })
        .catch((err) => {
            console.log('工具箱信息查询失败')
            console.log(err)
        })
    return tool
}
module.exports = getToolById
