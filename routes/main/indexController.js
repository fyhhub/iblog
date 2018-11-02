const getNavList = require('../../model/nav/getNavList')
const getArticleList = require('../../model/article/getArticleList')
const getToolsList = require('../../model/tools/getToolsList')
const fs = require('fs')
module.exports = async (ctx) => {
    let navList = await getNavList()
    let articleList = await getArticleList()
    articleList = articleList.filter((item) => {
        return fs.existsSync(item.article_url)
    })
    let toolsList = await getToolsList()
    await ctx.render('main/index', {
        navList,
        articleList,
        toolsList
    })
}