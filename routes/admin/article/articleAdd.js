const getArticlePathById = require('../../../model/getArticlePathById')
const fs = require('fs')
module.exports = async (ctx) => {
    if (ctx.request.query.id) {
        let id = ctx.request.query.id
        let path = await getArticlePathById(id)
        if (fs.existsSync(path.article_url)) {
            let content = fs.readFileSync(path.article_url)
            await ctx.render('admin/article.html', {
                content: content.toString()
            })
            return
        } else {
            console.log('文件不存在')
        }
    }
    ctx.render('admin/article.html', {
        content: ''
    })
}