const p = require('../../config/mysql')
const getToolsList = async () => {
    let tools = []
    await p.query(`select * from tools`)
        .then((data) => {
            data.forEach(function (item) {
                tools.push({
                    tool_id: item.tool_id,
                    tool_name: item.tool_name,
                    tool_url: item.tool_url
                })
            })
        })
        .catch((err) => {
            console.log('工具箱信息查询失败')
            console.log(err)
        })
    return tools
}
module.exports = getToolsList
