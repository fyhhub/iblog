const changeAtricleStatus = require('../../../model/changeAtricleStatus')
const fs = require('fs')
module.exports = async (ctx) => {
    let resInfo = await changeAtricleStatus(ctx.request.query.id)
    ctx.body = resInfo
}