const getArticleList = require('../../../model/getArticleList')
module.exports = async (ctx) => {
    let list = await getArticleList()
    ctx.render('admin/articleCheck.html', {
        list
    })
}