const getArticleList = require('../../../model/article/getArticleList')
const fs = require('fs')
module.exports = async (ctx) => {
    let list = await getArticleList()
    list = list.filter((item) => {
        return  fs.existsSync(item.article_url)
    })
    if (ctx.request.query.page) {
        let page = ctx.request.query.page - 1
        ctx.render('admin/articleCheck.html', {
            list: list.slice(page * 5, page * 5 + 5),
            count: Math.ceil(list.length/5),
            page: page+1
        })
    } else {
        ctx.render('admin/articleCheck.html', {
            list: list.slice(0, 4),
            count: Math.ceil(list.length/5)
        })
    }
}