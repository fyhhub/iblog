module.exports = async (ctx) => {
    console.log(ctx.request.body)
    ctx.body = {
        success: 1,
        message: "提示的信息",
        url: "/file/upload"
    }
}