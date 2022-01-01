const mongoose = require('mongoose');

const Token = new mongoose.Schema({
    email: {
        type: String,
        min: 2,
        max: 1005
    },
    reg_date: {
        type: String,
        min: 2,
        max: 1005
    },

    token: {
        type: Number,
        
    },
    
 
});

module.exports = mongoose.model('Token',Token);