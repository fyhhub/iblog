const delArticleById = require('../../../model/article/delArticleById')
const getArticlePathById = require('../../../model/article/getArticlePathById')
const fs = require('fs')
module.exports = async (ctx) => {
    if (ctx.request.query.ids) {
        let ids = ctx.request.query.ids.split('-')
        let resInfo = null
        for(let item of ids) {
            let url = await getArticlePathById(item)
            resInfo = await delArticleById(item)
            if (fs.existsSync(url.article_url)) {
                fs.unlinkSync(url.article_url)
            } else {
                resInfo.success = false
                resInfo.message = '要删除的文章不存在:' + item
            }
            if (fs.existsSync(url.article_introduce_img)) {
                fs.unlinkSync(url.article_introduce_img)
            }
        }
        ctx.body = resInfo
    }
    if (ctx.request.query.id) {
        let url = await getArticlePathById(ctx.request.query.id)
        let resInfo = await delArticleById(ctx.request.query.id)
        if (resInfo.success) {
            if (fs.existsSync(url.article_url)) {
                fs.unlinkSync(url.article_url)
            } else {
                resInfo.success = false
                resInfo.message = '要删除的文章不存在' + ctx.request.query.id
            }
            if (fs.existsSync(url.article_introduce_img)) {
                fs.unlinkSync(url.article_introduce_img)
            }
        }
        ctx.body = resInfo
    }
}