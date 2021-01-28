const mongoose = require('mongoose');

const opinionSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },

    opinion:{
        type: String,
        required: true,
    },   
    });
    

module.exports = mongoose.model('Opinion', opinionSchema);