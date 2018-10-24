const p = require('../config/mysql')
const getInfoList = async () => {
    let Info = {}
    await p.query(`select * from Info`)
        .then((data) => {
            console.log(data[0])
                Info.name = data[0].name
                Info.net_name = data[0].net_name
                Info.career = data[0].career
                Info.email = data[0].email
                Info.contact = data[0].contact
                Info.introduce = data[0].introduce
                Info.avatar = data[0].avatar
        })
        .catch((err) => {
            console.log('信息查询失败')
            console.log(err)
        })
    return Info
}
module.exports = getInfoList
