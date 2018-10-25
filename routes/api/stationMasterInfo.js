const getInfoList = require('../../model/getInfoList')
module.exports = async (ctx) => {
    let masterInfo = await getInfoList()
    console.log(masterInfo)
    let name = ctx.session.isAdmin.name
    for (let item of masterInfo) {
        if (item.name === name) {
            ctx.body = item
            return
        }
    }
}