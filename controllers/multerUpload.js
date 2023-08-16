const Product = require('../models/product')

const localMulter = async (req, res) => {
   // const array = []
   
   console.log(req.file);
   // console.log(req.files);
   // req.files.forEach((item) => {
   //    // console.log(item.filename);
   //    array.push(`/sample/${item.filename}`)
   // });

   // console.log(array);
   
   
   const product = await Product.findOne({_id: req.params.id})

   const url = `/uploads/${req.file.filename}`
   product.image = url
   const result = await product.save()

   return res.status(200).json({ msg: 'Success', data: result })
}



module.exports = {
   localMulter
}