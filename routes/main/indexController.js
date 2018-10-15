const mysql = require('../../config/mysql')

module.exports = async (ctx) => {


    await ctx.render('main/index')
}