const getArticleList = require('../../model/article/getArticleList')
const getNavList = require('../../model/nav/getNavList')
module.exports = async (ctx) => {
    let tag = ctx.params.tag
    let articleList = await getArticleList()
    let navList = await getNavList()
    articleList = articleList.filter((item) => {
        return item.article_tags == tag
    })
    ctx.render('main/tagList', {
        articleList,
        navList
    })
}