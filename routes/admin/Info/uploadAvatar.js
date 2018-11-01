const path = require('path')
const fs = require('fs')
const updateInfoImage = require('../../../model/info/updateInfoImage')
module.exports = async (ctx) => {
    const file = ctx.request.files.uploadAvatar
    let name = ctx.session.isAdmin.name
    let filePath = path.join(__dirname.slice(0, __dirname.length - 18) , `/public/images/avatar/${name}-${file.name}`)
    let resInfo = await updateInfoImage(name,`/images/avatar/${name}-${file.name}`)
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