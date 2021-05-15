const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email is already present']
    },
    phone:{
        type: String,
        required: true,
    },
    message: {
        type: String,
        required:true
    }
});


const cntct = new mongoose.model('Contact', Contact);

module.exports = cntct;