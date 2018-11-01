const path = require('path')
const fs = require('fs')
module.exports = async (ctx) => {
    const file = ctx.request.files['editormd-image-file'];
    const id = ctx.request.query.guid
    let filePath = path.join(__dirname.slice(0, __dirname.length - 21), `./public/images/articleUploadImg/${id}-${file.name}`)
    const data = fs.readFileSync(file.path, 'binary')
    fs.writeFileSync(filePath, data, 'binary')
    if (await fs.existsSync(filePath)) {
        ctx.body = {
            success: 1,
            message: "上传成功",
            url: `/images/articleUploadImg/${id}-${file.name}`
        }
    } else {
        ctx.body = {
            success: 0,
            message: "上传失败",
            url: `/images/articleUploadImg/${id}-${file.name}`
        }
    }
}