const getToolsList = require('../../../model/tools/getToolsList')
module.exports = async (ctx) => {
    let toolsList = await getToolsList()
    ctx.render('admin/tools.html', {
        toolsList: toolsList
    })
}