const Product = require('../models/product')
const cloudinary = require('cloudinary').v2
const path = require('path')

const Local = async (req, res) => {
   console.log(req.files.image);

   const productImage = req.files.image
   

   const ext = path.extname(productImage.name)
   const Name = 'photo'+'-'+ Date.now() +ext

   // const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`) 
   const imagePath = path.join(__dirname, '../public/uploads/' + `${Name}`) 
   await productImage.mv(imagePath)

   const product =await Product.findOne({_id: req.params.id})
   // const url = `/uploads/${productImage.name}`
   const url = `/uploads/${Name}`
   product.image = url
   const result = await product.save()

   return res.status(200).json({msg: 'Success', data: result})




   // if (productImage.length) {
   //    const array = []

   //    for (i in productImage) {
   //       const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage[i].name}`)
   //       await productImage[i].mv(imagePath)
   //       array.push(`/uploads/${productImage[i].name}`)
   //    }
   //    console.log(array);

   //    return res.status(200).json({ success: true, img: { src: array } })

   // } else {
   //    const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`)

   //    await productImage.mv(imagePath)

   //    return res.status(200).json({ success: true, img: { src: `/uploads/${productImage.name}` } })

   // }


}

const expressCloud = async (req, res) => {
   const productImage = req.files.image
   // console.log(productImage);
   const response = await cloudinary.uploader.upload(productImage.tempFilePath, {
      use_filename: true,
      folder: 'file-upload',
   });
   // console.log(response);

   const product = await Product.findOne({ _id: req.params.id })
   const url = response.secure_url
   product.image = url
   const result = await product.save()

   return res.status(200).json({ msg: 'Success', data: result })


}



module.exports = {
   Local,
   expressCloud
}