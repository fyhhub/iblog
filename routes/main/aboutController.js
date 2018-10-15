module.exports = async (ctx, next) => {
    await ctx.render('main/about')
}