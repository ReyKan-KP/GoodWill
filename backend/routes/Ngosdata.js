const express = require('express');
const router = express.Router();
const NgosData = require('../models/Ngodata');
const { body, validationResult } = require('express-validator');
const cloudinary = require('cloudinary').v2;
const bodyParser = require('body-parser')
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());


const {
  saveNgodata,
} = require("../controllers/ngocontroller");


cloudinary.config({ 
    cloud_name: 'dhwrvpowg', 
    api_key: '649181962214751', 
    api_secret: 'rWhxYWKVHMDBP1rr6bBOspSm1AI',
    secure: true
  });


router.post('/savengodata',[
  body('title', 'Enter a valid title').isLength({ min: 3 }),
  body('description', 'Enter a valid description').isLength({ min: 10 }),
], saveNgodata);



router.post('/addingophotos', async(req, res)=>{

  // const update = { age: 59 }
  const file=req.files.photo;
  cloudinary.uploader.upload(file.tempFilePath, async(err, result)=>{
  console.log(result);
  // const ngodata=new NgosData();
  // ngodata.image.push(result.url);

  const doc = await NgosData.findOneAndUpdate(
    { _id: req.body.id }, 
    { $push: { image: result.url} }).then(post => {
 
      res.json("updated");

     });




  })
})

module.exports = router
