const getArticlePathById = require('../../model/article/getArticlePathById')
const getArticleList = require('../../model/article/getArticleList')
const getNavList = require('../../model/nav/getNavList')
const getToolsList = require('../../model/tools/getToolsList')
const fs = require('fs')
module.exports = async (ctx) => {
    let url = await getArticlePathById(ctx.request.query.id)
    let content = fs.readFileSync(url.article_url, 'utf8')
    let navList = await getNavList()
    let toolsList = await getToolsList()
    let article = await getArticleList()
    article = article.filter((item) => {
        return item.id == ctx.request.query.id
    })
    ctx.render('main/article.html', {
        content,
        navList,
        toolsList,
        article: article.length == 1 ? article[0] : []
    })
}