const getArticleList = require('../../model/getArticleList')
module.exports = async (ctx) => {
    let articleList = await getArticleList()
    let tags = []
    for (let item of articleList) {
        tags.push({
            article_tags: item.article_tags,
            id:item.id
        })
    }
    ctx.body = tags
}