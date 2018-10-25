const updateInfo = require('../../../model/updateInfo')
module.exports = async (ctx) => {
    let resInfo = await updateInfo(ctx.request.body)
    ctx.body = resInfo
}