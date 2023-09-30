const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    serialNumber: {
        type:Number
    },
    name:{
        type: String
    },
    email:{
        type: String
    },
    mobile:{
        type: Number
    }
});

module.exports = mongoose.model('user', userSchema);