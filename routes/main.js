const router = require('koa-router')()
const indexController = require('./main/indexController')
const aboutController = require('./main/aboutController')
const learnController = require('./main/learnController')
const articleController = require('./main/articleController')
const gbookController = require('./main/gbookController')
const tagController = require('./main/tagController')

router.get('/',indexController)
router.get('/about', aboutController)
router.get('/learn', learnController)
router.get('/article', articleController)
router.get('/gbook', gbookController)
router.get('/tag/:tag', tagController)


module.exports = router