const NgosData = require('../models/Ngodata');
const { body, validationResult } = require('express-validator');
const cloudinary = require('cloudinary').v2;
const asyncHandler = require("express-async-handler");

cloudinary.config({
    cloud_name: 'dhwrvpowg',
    api_key: '649181962214751',
    api_secret: 'rWhxYWKVHMDBP1rr6bBOspSm1AI',
    secure: true
});

const saveNgodata = asyncHandler(async (req, res) => {


    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.tag);


    let success = false;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
    }
    catch (error) {
        console.error(success, error.message);
        res.status(500).send("Internal Server Error in error");
    }


    let fileData = {};
    let uploadedFile;
    // console.log(req.body.photo);
    console.log(req.file);
    console.log(req.files.photo.tempFilePath);

    uploadedFile = await cloudinary.uploader.upload(req.files.photo.tempFilePath, async (err, result) => {


        try {
            const { title, description, tag } = req.body;
            const ngodata = new NgosData({
                title, description, tag
            });
           
            console.log(result.url);
            ngodata.image.push(result.url);
            console.log(ngodata.image);
            const savedNgo = await ngodata.save()
            res.json(savedNgo);

        } catch (error) {
            console.error(success, error.message);
            res.status(500).send("Internal Server Error");
        }

    })


})

module.exports={
    saveNgodata
  }
  