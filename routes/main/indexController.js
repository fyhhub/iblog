const getNavList = require('../../model/nav/getNavList')
const getArticleList = require('../../model/article/getArticleList')
const getToolsList = require('../../model/tools/getToolsList')
module.exports = async (ctx) => {
    let navList = await getNavList()
    let articleList = await getArticleList()
    let toolsList = await getToolsList()
    await ctx.render('main/index', {
        navList,
        articleList,
        toolsList
    })
}