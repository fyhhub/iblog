const router = require('koa-router')()
const indexController = require('./main/indexController')
const aboutController = require('./main/aboutController')
const listController = require('./main/listController')
const articleController = require('./main/articleController')

router.get('/',indexController)
// router.get('/about', aboutController)
router.get('/list', listController)
router.get('/article', articleController)
module.exports = router