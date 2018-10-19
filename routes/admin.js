const router = require('koa-router')()
const loginController = require('./admin/login/loginController')
const loginPostController = require('./admin/login/loginPostController')
const indexController = require('./admin/index/indexController')
const logoutController = require('./admin/login/logoutController')
const navController = require('./admin/nav/navController')
const navAdd = require('./admin/nav/navAdd')
const navAddPost = require('./admin/nav/navAddPost')
const navDel = require('./admin/nav/navDel')
const navUpdate = require('./admin/nav/navUpdate')
const navUpdatePost = require('./admin/nav/navUpdatePost')
const articleAdd = require('./admin/article/articleAdd')
const articleAddPost = require('./admin/article/articleAddPost')
const fileUpload = require('./admin/article/fileUpload')
const articleCheck = require('./admin/article/articleCheck')
// get
router.get('/admin',loginController)
router.get('/admin/index',indexController)
router.get('/admin/logout',logoutController)
router.get('/admin/nav',navController)
router.get('/admin/navAdd',navAdd)
router.get('/admin/navDel',navDel)
router.get('/admin/navUpdate',navUpdate)
router.get('/admin/articleAdd/:id',articleAdd)
router.get('/admin/articleCheck',articleCheck)



// post
router.post('/admin/navUpdatePost',navUpdatePost)
router.post('/admin/navAddPost',navAddPost)
router.post('/admin',loginPostController)
router.post('/admin/articleAddPost',articleAddPost)
router.post('/file/upload',fileUpload)




module.exports = router