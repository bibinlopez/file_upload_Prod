const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path')


const { localMulter } = require('../controllers/multerUpload')



var storage = multer.diskStorage({
   destination: './public/uploads',
   filename: function (req, file, cb) {
      let ext = path.extname(file.originalname)
      // console.log(ext)
      cb(null, file.fieldname + '-' + Date.now() + Math.floor(10 + Math.random() * 90) + ext)
   }
})
var upload = multer({ storage: storage })



// router.use('/', express.static('public'))


router.post('/:id', upload.single('image'), localMulter)
// router.post('/', upload.array('image', 6), localMulter)




module.exports = router