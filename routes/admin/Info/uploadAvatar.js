const path = require('path')
const fs = require('fs')
const updateInfoImage = require('../../../model/info/updateInfoImage')
module.exports = async (ctx) => {
    const file = ctx.request.files.uploadAvatar
    let name = ctx.session.isAdmin.name
    const reader = await fs.createReadStream(file.path)
    let filePath = path.join(__dirname.slice(0, __dirname.length - 18) , `/public/images/avatar/${name}-${file.name}`)
    let resInfo = await updateInfoImage(name,`/images/avatar/${name}-${file.name}`)
    if (resInfo.success) {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
        }
        const upStream = fs.createWriteStream(filePath)
        reader.pipe(upStream)
    }
    ctx.body = resInfo
}