const path = require('path')
const fs = require('fs')
const updateArtcleIntro = require('../../../model/updateArtcleIntro')
module.exports = async (ctx) => {
    const file = ctx.request.files.uploadImg
    let id = ctx.request.query.id
    const reader = await fs.createReadStream(file.path)
    let filePath = path.join(__dirname, `./source/images/${id}-${file.name}`)
    let resInfo = await updateArtcleIntro(id, filePath)
    if (resInfo.success) {
        const upStream = fs.createWriteStream(filePath)
        reader.pipe(upStream)
    }
    ctx.body = resInfo
}