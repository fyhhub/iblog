const getInfoList = require('../../../model/getInfoList')
module.exports = async (ctx) => {
    let name = ctx.session.isAdmin.name
    let userInfo = await getInfoList()
    for (let item of userInfo) {
        if (item.name === name) {
            ctx.render('admin/info.html', {
                info: item
            })
        }
    }
}