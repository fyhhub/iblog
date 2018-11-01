const getToolsList = require('../../../model/tools/getToolsList')
const getToolById = require('../../../model/tools/getToolById')
module.exports = async (ctx) => {
    let {tool_id} = ctx.request.query
    let toolsList = await getToolsList()
    let tool = await getToolById(tool_id)
    console.log(tool)
    ctx.render('admin/toolUpdate.html', {
        toolsList,
        tool
    })
}