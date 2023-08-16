const express = require('express')


const router = express.Router()

const { 
   createProduct,
   getAllProduct } = require('../controllers/productController')




router.post('/', createProduct)
router.get('/', getAllProduct)




module.exports = router