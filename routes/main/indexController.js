const getNavList = require('../../model/getNavList')

module.exports = async (ctx) => {
    let navList = null
    await getNavList(function (data) {
        navList = data
    })
    await ctx.render('main/index', {
        navList
    })
}