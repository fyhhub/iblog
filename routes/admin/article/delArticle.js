const delArticleById = require('../../../model/delArticleById')
const getArticleUrlById = require('../../../model/getArticleUrlById')
const fs = require('fs')
module.exports = async (ctx) => {
    if (ctx.request.query.ids) {
        let ids = ctx.request.query.ids.split('-')
        let resInfo = null
        for(let item of ids) {
            let url = await getArticleUrlById(item)
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
        let url = await getArticleUrlById(ctx.request.query.id)
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