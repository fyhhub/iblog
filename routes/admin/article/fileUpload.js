const path = require('path')
module.exports = async (ctx) => {
    const files = ctx.request.files.file;
    ctx.body = {
        success: 1,
        message: "提示的信息",
        url: "/file/uploadImg"
    }
}