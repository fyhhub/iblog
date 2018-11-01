const p = require('../../config/mysql')
const mysql = require('mysql')
const resInfo = {
    success: false,
    message: ''
}
const updateArticleIntro = async (id, article_introduce_img) => {
    await p.query(`update article set article_introduce_img = ${mysql.escape(article_introduce_img)} where id = '${id}'`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '上传成功'
            } else {
                resInfo.success = false
                resInfo.message = '插图路径已经存在'
            }
        })
        .catch((err) => {
            resInfo.success = false
            resInfo.message = '上传失败'
            console.log('上传失败')
        })
    return resInfo
}
module.exports = updateArticleIntro
