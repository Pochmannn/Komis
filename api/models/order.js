const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    imie: {
        type: String,
        required: true
    },

    nazwaSamochodu:{
        type: String,
        required: true
    },
     
    });
    

module.exports = mongoose.model('Order', orderSchema);