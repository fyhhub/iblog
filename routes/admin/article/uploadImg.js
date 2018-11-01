const path = require('path')
const fs = require('fs')
const updateArticleIntro = require('../../../model/article/updateArticleIntro')
module.exports = async (ctx) => {
    const file = ctx.request.files.uploadImg
    let id = ctx.request.query.id
    let filePath = path.join(__dirname.slice(0, __dirname.length - 21), `./public/images/articleImg/${id}-${file.name}`)
    let resInfo = await updateArticleIntro(id, `/images/articleImg/${id}-${file.name}`)
    if (resInfo.success) {
        const data = fs.readFileSync(file.path, 'binary')
        fs.writeFileSync(filePath, data, 'binary')
        if (!fs.existsSync(filePath)){
            resInfo.success = false
            resInfo.message = '上传失败'
        }
    } else {
        resInfo.success = false
        resInfo.message = '上传失败'
    }
    ctx.body = resInfo
}