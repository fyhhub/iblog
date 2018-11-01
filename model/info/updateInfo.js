const p = require('../../config/mysql')
const resInfo = {
    success: false,
    message: ''
}
const updateInfo = async ({name, net_name, career, email, contact, introduce}) => {
    await p.query(`update info set net_name = '${net_name}', career = '${career}', email = '${email}', contact = '${contact}', introduce = '${introduce}' where name = '${name}'`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '保存成功'
            }
        })
        .catch((err) => {
            resInfo.success = false
            resInfo.message = '保存失败'
            console.log(err)
        })
    return resInfo
}
module.exports = updateInfo
