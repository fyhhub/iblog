const p = require('../../config/mysql')
const getNavList = async () => {
    let list = []
    await p.query(`select * from nav`)
        .then((data) => {
            data.forEach((item) => {
                list.push({
                    id:item.id,
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
module.exports = getNavList
