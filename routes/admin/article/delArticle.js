const delArticleById = require('../../../model/delArticleById')
const getArticleUrlById = require('../../../model/getArticleUrlById')
const fs = require('fs')
module.exports = async (ctx) => {
    let url = await getArticleUrlById(ctx.request.query.id)
    let resInfo = await delArticleById(ctx.request.query.id)
    console.log(url.article_introduce_img)
    if (resInfo.success) {
        if (fs.existsSync(url.article_url)) {
            fs.unlinkSync(url.article_url)
        } else {
            resInfo.success = false
            resInfo.message = '要删除的文章不存在'
        }
        if (fs.existsSync(url.article_introduce_img)) {
            fs.unlinkSync(url.article_introduce_img)
        }

    }
    ctx.body = resInfo
}