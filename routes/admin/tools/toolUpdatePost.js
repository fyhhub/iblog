const updateToolById = require('../../../model/tools/updateToolById')
module.exports = async (ctx) => {
    let tool = ctx.request.body
    let resInfo = await updateToolById(tool)
    ctx.body = resInfo
}