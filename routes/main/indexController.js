const getNavList = require('../../model/getNavList')
const getArticleList = require('../../model/getArticleList')
module.exports = async (ctx) => {
    let navList = await getNavList()
    let articleList = await getArticleList()
    await ctx.render('main/index', {
        navList,
        articleList: articleList
    })
}