const p = require('../config/mysql')
const delArticleById = async (id) => {
    let resInfo = {
        success: false,
        message: ''
    }
    await p.query(`delete from article where id = '${id}'`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '删除成功'
            }
            if (data.affectedRows == 0) {
                resInfo.success = false
                resInfo.message = '删除的文章不存在'
            }
        })
        .catch((err) => {
            console.log(err)
            console.log('删除文章失败')
            resInfo.success = false
            resInfo.message = '删除失败'
        })
    return resInfo
}
module.exports = delArticleById
