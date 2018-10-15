const router = require('koa-router')()
const indexController = require('./main/indexController')
const aboutController = require('./main/aboutController')
const listController = require('./main/listController')

router.get('/',indexController)
router.get('/about', aboutController)
router.get('/list', listController)

module.exports = router