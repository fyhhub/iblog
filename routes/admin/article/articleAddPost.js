const xss = require('xss')
module.exports = async (ctx) => {
    let {content} = ctx.request.body
    content = xss(content)
    ctx.body = {
        success: true
    }
}
function saveFile(filePath, fileData) {
    return new Promise((resolve, reject) => {
        const wstream = fs.createWriteStream(filePath);
        wstream.on('open', () => {
            const blockSize = 128;
            const nbBlocks = Math.ceil(fileData.length / (blockSize));
            for (let i = 0; i < nbBlocks; i += 1) {
                const currentBlock = fileData.slice(
                    blockSize * i,
                    Math.min(blockSize * (i + 1), fileData.length),
                );
                wstream.write(currentBlock);
            }

            wstream.end();
        });
        wstream.on('error', (err) => { reject(err); });
        wstream.on('finish', () => { resolve(true); });
    })
}