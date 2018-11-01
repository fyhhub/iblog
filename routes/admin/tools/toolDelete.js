const delToolById = require('../../../model/tools/delToolById')
module.exports = async (ctx) => {
    let {tool_id} = ctx.request.query
    let resInfo = await delToolById(tool_id)
    ctx.body = resInfo
}