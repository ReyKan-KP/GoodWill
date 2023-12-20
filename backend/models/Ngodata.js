const mongoose = require('mongoose');
const { Schema } = mongoose;

const Ngosdata = new Schema({
    // ngo:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    image: [ {type: String, trim:true} ],

    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('Ngosdata', Ngosdata);