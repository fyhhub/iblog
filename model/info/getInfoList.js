const p = require('../../config/mysql')
const getInfoList = async () => {
    let Info = []
    await p.query(`select * from info`)
        .then((data) => {
            data.forEach(function (item) {
                Info.push({
                    name: item.name,
                    net_name: item.net_name,
                    email: item.email,
                    career: item.career,
                    contact: item.contact,
                    introduce: item.introduce,
                    avatar: item.avatar
                })
            })
        })
        .catch((err) => {
            console.log('信息查询失败')
            console.log(err)
        })
    return Info
}
module.exports = getInfoList
