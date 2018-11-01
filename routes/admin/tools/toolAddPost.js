const addTool = require('../../../model/tools/addTool')
module.exports = async (ctx) => {
    let tool = ctx.request.body
    let resInfo = await addTool(tool)
    ctx.body = resInfo
}