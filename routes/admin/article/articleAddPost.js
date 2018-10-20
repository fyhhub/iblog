const xss = require('xss')
const fs = require('fs')
const saveArticle = require('../../../model/saveArticle')
const path = require('path')
const md5 = require('blueimp-md5')
const acticleInfo = {
    id: '',
    article_author: '',
    article_time: '',
    article_tags: '',
    article_title: '',
    article_read: 0,
    article_url: '',
    article_check: '0',
    article_introduce_img: ''
}
module.exports = async (ctx) => {
    let {content, title, tag} = ctx.request.body
    let date = new Date()
    let Info = null
    content = xss(content)
    title = xss(title)
    tag = xss(tag)
    acticleInfo.id = md5(Date.now()).substring(20)
    acticleInfo.article_author = ctx.session.isAdmin.name
    acticleInfo.article_time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    acticleInfo.article_tags = tag
    acticleInfo.article_title = title
    acticleInfo.article_url = path.join(__dirname, `./source/${title}---${acticleInfo.id}.md`)
    Info = await saveArticle(acticleInfo)
    if (Info.success) {
        fs.writeFileSync(acticleInfo.article_url, content)
    } else {
        Info.message = '上传失败'
    }
    ctx.body = Info
}
