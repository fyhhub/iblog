const getNavList = require('../../model/nav/getNavList')
const getArticleList = require('../../model/article/getArticleList')
const fs = require('fs')
module.exports = async (ctx) => {
    let navList = await getNavList()
    let articleList = await getArticleList()
    articleList = articleList.filter((item) => {
        return fs.existsSync(item.article_url)
    })
    await ctx.render('main/learn.html', {
        navList,
        articleList
    })
}