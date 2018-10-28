const getInfoList = require('../../../model/getInfoList')
module.exports = async (ctx) => {
    let name = ctx.session.isAdmin.name
    let userInfo = await getInfoList()
    ctx.render('admin/info.html', {
        info: userInfo.find((item) => item.name === name)
    })
}