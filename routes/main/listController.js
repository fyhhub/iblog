const getNavList = require('../../model/nav/getNavList')
module.exports = async (ctx, next) => {
    let navList = await getNavList()
    await ctx.render('main/list', {
        navList
    })
}