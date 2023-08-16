const Product = require('../models/product')

const createProduct = async (req, res) => {
   
   const product = new Product(req.body)

   const result = await product.save()

   return res.status(201).json({ result })

}

const getAllProduct = async (req, res) => {
   const product = await Product.find({})
   return res.status(200).json({ data: product , count : product.length })
}


module.exports = {
   createProduct,
   getAllProduct
}