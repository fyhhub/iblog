const loginOut = {
    success: false,
    message: ''
}
module.exports = async (ctx) => {
    ctx.session.isAdmin = null
    if (ctx.session.isAdmin == null) {
        loginOut.success = true
        loginOut.message = '退出成功'
    } else {
        loginOut.success = false
        loginOut.message = '退出失败'
    }
    ctx.body = loginOut
}