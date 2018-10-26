const Koa = require('koa')
const app = new Koa()
const path = require('path')
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody = require('koa-body');
const logger = require('koa-logger')
const render = require('koa-art-template')
const serve = require('koa-static')
const main = require('./routes/main')
const api = require('./routes/api')
const admin = require('./routes/admin')
const session = require('koa-session')

// error handler
onerror(app)




// middlewares
app.keys = ['fanyihui']
const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 10000000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}
app.use(session(CONFIG, app))



app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}))

app.use(json())
app.use(logger())
app.use(serve(__dirname + '/public'))
app.use(serve(__dirname + '/static'))

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});


// routes
//session拦截

app.use(async (ctx, next) => {
    const allowpage = ['/admin']
    if (allowpage.includes(ctx.originalUrl)) {

    } else if (ctx.originalUrl.startsWith('/admin/')){
        if (ctx.session.isAdmin == null || ctx.session.isAdmin == undefined) {
            ctx.redirect('/admin')
            return
        }
    }
    await next()
})

// app.use(async (ctx, next) => {
//     try {
//         await next()
//         if (ctx.status === 404) {
//             ctx.throw(404);
//         }
//     } catch (err) {
//         console.error(err.stack);
//         const status = err.status || 500;
//         ctx.status = status;
//         if (status === 404) {
//             ctx.render('main/404.html')
//         } else if (status === 500) {
//             ctx.body = '500'
//         }
//     }
// })
app.use(main.routes(), main.allowedMethods())
app.use(api.routes(), api.allowedMethods())
app.use(admin.routes(), admin.allowedMethods())




// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})




// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})



module.exports = app
