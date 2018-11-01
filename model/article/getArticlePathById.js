const p = require('../../config/mysql')
const getArticlePathById = async (id) => {
    let url = {}
    await p.query(`select article_url, article_introduce_img from article where id = '${id}'`)
        .then((data) => {
                url.article_url = data[0].article_url
                url.article_introduce_img = data[0].article_introduce_img
        })
        .catch((err) => {
            console.log(err)
            console.log('查询文章路径失败')
        })
    return url
}
module.exports = getArticlePathById
