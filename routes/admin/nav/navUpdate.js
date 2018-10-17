const getNavList = require('../../../model/getNavList')
module.exports = async (ctx) => {
    let navList = null
    await getNavList(function (data) {
        navList = data
    })
    ctx.render('admin/update-nav.html', {
        navList
    })
}