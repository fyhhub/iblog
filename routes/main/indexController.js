const getNavList = require('../../model/getNavList')
const getArticleList = require('../../model/getArticleList')
module.exports = async (ctx) => {
    let navList = null
    let articleList = await getArticleList()
    await getNavList(function (data) {
        navList = data
    })
    await ctx.render('main/index', {
        navList,
        articleList: articleList
    })
}