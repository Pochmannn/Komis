const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },
    desc:{
        type:String,
        required: true,
    }   
    });
    

module.exports = mongoose.model('Car', carSchema);