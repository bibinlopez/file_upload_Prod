
const express = require('express')

const router = express.Router()


const { Local, expressCloud } = require('../controllers/expressUpload')



router.post('/:id', Local)
router.post('/cloud/:id', expressCloud)



module.exports = router

