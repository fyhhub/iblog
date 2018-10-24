const getInfoList = require('../../model/getInfoList')
module.exports = async (ctx) => {
    let masterInfo = await getInfoList()
    ctx.body = masterInfo
}