const getNavList = require('../../../model/nav/getNavList')
module.exports = async (ctx) => {
    let navList = await getNavList()
    ctx.render('admin/update-nav.html', {
        navList
    })
}