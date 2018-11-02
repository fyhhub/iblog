const router = require('koa-router')()
const indexController = require('./main/indexController')
const aboutController = require('./main/aboutController')
const listController = require('./main/listController')
const articleController = require('./main/articleController')
const gbookController = require('./main/gbookController')

router.get('/',indexController)
router.get('/about', aboutController)
router.get('/learn', listController)
router.get('/article', articleController)
router.get('/gbook', gbookController)
module.exports = router