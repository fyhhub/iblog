const getInfoList = require('../../../model/info/getInfoList')
module.exports = async (ctx) => {
    let name = ctx.session.isAdmin.name
    let userInfo = await getInfoList()
    console.log(userInfo)
    ctx.render('admin/info.html', {
        info: userInfo.find((item) => item.name === name)
    })
}