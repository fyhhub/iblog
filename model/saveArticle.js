const p = require('../config/mysql')
const resInfo = {
    success: false,
    message: ''
}
const saveArticle = async (acticleInfo) => {
    await p.query(`insert into article values('${acticleInfo.id}', '${acticleInfo.article_author}', '${acticleInfo.article_tags}', '${acticleInfo.article_time}', '${acticleInfo.article_title}',${acticleInfo.article_read}, '${acticleInfo.article_url}', '${acticleInfo.article_check}')`)
        .then((data) => {
            resInfo.success = true
            resInfo.message = '存入数据库成功'
        })
        .catch((err) => {
            console.log(err)
            resInfo.success = false
            resInfo.message = '存入数据库失败'
            console.log('存入数据库失败')
            return
        })
    return resInfo
}
module.exports = saveArticle
