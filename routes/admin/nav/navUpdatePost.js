const updateNavLiist = require('../../../model/updateNavLiist')
module.exports = async (ctx) => {
    let {value, url, id} = ctx.request.body
    let resInfo = null
    await updateNavLiist(id, value, url, function (res) {
        resInfo = res
    })
    ctx.body = resInfo
}