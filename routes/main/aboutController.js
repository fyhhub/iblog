const getNavList = require('../../model/nav/getNavList')
module.exports = async (ctx,) => {
    let navList = await getNavList()
    await ctx.render('main/about', {
        navList
    })
}