const xss = require('xss')
const fs = require('fs')
const saveArticle = require('../../../model/article/saveArticle')
const path = require('path')
const md5 = require('blueimp-md5')
const getArticlePathById = require('../../../model/article/getArticlePathById')
const delArticleById = require('../../../model/article/delArticleById')
const acticleInfo = {
    id: '',
    article_author: '',
    article_time: '',
    article_tags: '',
    article_title: '',
    article_read: 0,
    article_url: '',
    article_check: 0,
    article_introduce_img: '',
    article_introduce: ''
}
module.exports = async (ctx) => {
    let {content, title, tag, content_intro} = ctx.request.body
    if (ctx.request.body.id) {
        let id = ctx.request.body.id
        let path = await getArticlePathById(id)
        let resInfo = await delArticleById(id)
        let {article_url, article_introduce_img} = path
        if (article_url && fs.existsSync(article_url)) {
            fs.unlinkSync(article_url)
        } else {
            console.log('更新失败，无法删除之前的文件')
        }
        if (article_introduce_img && fs.existsSync(article_introduce_img)) {
            fs.unlinkSync(article_introduce_img)
        }
        if (!resInfo.success) {
            console.log('更新失败，无法删除之前的数据库信息')
        }
    }
    let date = new Date()
    let Info = null
    title = xss(title)
    tag = xss(tag)
    acticleInfo.id = md5(Date.now()).substring(20)
    acticleInfo.article_author = ctx.session.isAdmin.name
    acticleInfo.article_time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    acticleInfo.article_tags = tag
    acticleInfo.article_title = title
    acticleInfo.article_introduce = content_intro
    acticleInfo.article_url = path.join(__dirname.slice(0, __dirname.length - 21), `./public/articles/${acticleInfo.id}-${title}.md`)
    Info = await saveArticle(acticleInfo)
    if (Info.success) {
        fs.writeFileSync(acticleInfo.article_url, content)
    } else {
        Info.message = '上传失败'
    }
    ctx.body = Info
}
