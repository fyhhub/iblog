const getNavList = require('../../model/getNavList')
module.exports = async (ctx, next) => {
    let navList = await getNavList()
    await ctx.render('main/list', {
        navList
    })
}