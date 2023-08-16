

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Please provide name']
   },
   price: {
      type: String,
      required: [true, 'Please provide price']
   },
   image: {
      type: String
   }
}, { timestamps: true }
)



module.exports = mongoose.model('Product',productSchema)




