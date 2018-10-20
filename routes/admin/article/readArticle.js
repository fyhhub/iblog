const getArticleUrlById = require('../../../model/getArticleUrlById')
const fs = require('fs')
module.exports = async (ctx) => {
    let url = await getArticleUrlById(ctx.request.query.id)
    let content = fs.readFileSync(url, 'utf8')
    ctx.render('admin/readArticle.html', {
        content
    })
}