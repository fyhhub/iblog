const delArticleById = require('../../../model/delArticleById')
const getArticleUrlById = require('../../../model/getArticleUrlById')
const fs = require('fs')
module.exports = async (ctx) => {
    let url = await getArticleUrlById(ctx.request.query.id)
    let resInfo = await delArticleById(ctx.request.query.id)
    if (resInfo.success) {
        fs.unlinkSync(url)
    }
    ctx.body = resInfo
}