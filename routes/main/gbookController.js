const getNavList = require('../../model/nav/getNavList')
const getToolsList = require('../../model/tools/getToolsList')
module.exports = async (ctx,) => {
    let navList = await getNavList()
    let toolsList = await getToolsList()
    await ctx.render('main/gbook', {
        navList,
        toolsList
    })
}