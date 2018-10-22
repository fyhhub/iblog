const changeAtricleStatus = require('../../../model/changeAtricleStatus')
module.exports = async (ctx) => {
    if (ctx.request.query.ids) {
        let ids = ctx.request.query.ids.split('-')
        let resInfo = null
        for(let item of ids) {
            resInfo = await changeAtricleStatus(item)
        }
        ctx.body = resInfo
    }
    if (ctx.request.query.id) {
        let resInfo = await changeAtricleStatus(ctx.request.query.id)
        ctx.body = resInfo
    }
}