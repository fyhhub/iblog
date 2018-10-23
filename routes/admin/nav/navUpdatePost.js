const updateNavLiist = require('../../../model/updateNavList')
module.exports = async (ctx) => {
    let {value, url, id} = ctx.request.body
    let resInfo = await updateNavLiist(id, value, url)
    ctx.body = resInfo
}