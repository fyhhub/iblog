const p = require('../config/mysql')
const getInfoList = async () => {
    var list = []
    await p.query(`select * from nav`)
        .then((data) => {
            data.forEach((item) => {
                list.push({
                    nav_name: item.nav_name,
                    nav_url: item.nav_url
                })
            })
        })
        .catch((err) => {
            console.log('导航栏列表查询失败')
            console.log(err)
        })
    return list
}
module.exports = getInfoList
