const getInfoList = require('../../model/info/getInfoList')
module.exports = async (ctx) => {
    let masterInfo = await getInfoList()
    let info = masterInfo.find((item) => item.name === 'admin')
    ctx.body = info
}