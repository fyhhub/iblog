const router = require('koa-router')()
const stationMasterInfo = require('./api/stationMasterInfo')
const tags = require('./api/tags')
router.get('/api/masterInfo', stationMasterInfo)
router.get('/api/tags', tags)



module.exports = router