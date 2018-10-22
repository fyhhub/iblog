const getArticlePathById = require('../../../model/getArticlePathById')
const fs = require('fs')
module.exports = async (ctx) => {
    let url = await getArticlePathById(ctx.request.query.id)
    let content = fs.readFileSync(url.article_url, 'utf8')
    ctx.render('admin/readArticle.html', {
        content
    })
}