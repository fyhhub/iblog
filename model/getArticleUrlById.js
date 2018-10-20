const p = require('../config/mysql')
const getArticleUrlById = async (id) => {
    let url = ''
    await p.query(`select article_url from article where id = '${id}'`)
        .then((data) => {
            url = data[0].article_url
        })
        .catch((err) => {
            console.log(err)
            console.log('查询文章路径失败')
        })
    return url
}
module.exports = getArticleUrlById
