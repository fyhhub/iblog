const p = require('../../config/mysql')
const mysql = require('mysql')
const resInfo = {
    success: false,
    message: ''
}
const updateInfoImage = async (name, avatar) => {
    await p.query(`update info set avatar = ${mysql.escape(avatar)} where name = '${name}'`)
        .then((data) => {
            if (data) {
                resInfo.success = true
                resInfo.message = '上传成功'
            }
        })
        .catch((err) => {
            resInfo.success = false
            resInfo.message = '上传失败'
            console.log(err)
        })
    return resInfo
}
module.exports = updateInfoImage
