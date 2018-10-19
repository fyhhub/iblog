const p = require('../config/mysql')
const saveArticle = async () => {
    var list = []
    await p.query(`select * from article`)
        .then((data) => {
            data.forEach((item) => {
                list.push({
                    id: item.id,
                    article_author: item.article_author,
                    article_tags: item.article_tags,
                    article_time: item.article_time,
                    article_title: item.article_title,
                    article_read: item.article_read,
                    article_check: item.article_check,
                    article_url: item.article_url
                })
            })
        })
        .catch((err) => {
            console.log('导航栏列表查询失败')
            console.log(err)
        })
    return list
}
module.exports = saveArticle
