const getNavList = require('../../../model/nav/getNavList')
module.exports = async (ctx) => {
    let navList = await getNavList()
    console.log(navList)
    ctx.render('admin/add-nav.html', {
        navList
    })
}