const p = require('../config/mysql')
const resInfo = {
    success: false,
    message: ''
}
const changeAtricleStatus = async (id) => {
    await p.query(`update article set article_check = '1' where id = '${id}'`)
        .then((data) => {
            if (data.affectedRows > 0) {
                resInfo.success = true
                resInfo.message = '审核通过'
            } else {
                resInfo.success = false
                resInfo.message = '你已经审核过了'
            }
        })
        .catch((err) => {
            resInfo.success = false
            resInfo.message = '发生错误,审核未通过'
        })
    return resInfo
}
module.exports = changeAtricleStatus
