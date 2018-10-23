const getArticlePathById = require('../../model/getArticlePathById')
const getNavList = require('../../model/getNavList')
const fs = require('fs')
module.exports = async (ctx) => {
    let url = await getArticlePathById(ctx.request.query.id)
    let content = fs.readFileSync(url.article_url, 'utf8')
    let navList = await getNavList()
    ctx.render('main/article.html', {
        content,
        navList
    })
}