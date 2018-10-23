const p = require('../config/mysql')
const getNavList = async () => {
    var list = []
    await p.query(`select id,nav_name, nav_url from nav`)
        .then((data) => {
            data.forEach((item) => {
                list.push({
                    nav_name: item.nav_name,
                    nav_url: item.nav_url,
                    id: item.id
                })
            })
        })
        .catch((err) => {
            console.log('导航栏列表查询失败')
            return
        })
    return list
}
module.exports = getNavList
