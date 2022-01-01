const mongoose = require('mongoose');

const Broadcast = new mongoose.Schema({
    broad_mail: {
        type: String,
        min: 2,
        max: 1005
    },
    broad_name: {
        type: String,
        min: 2,
        max: 1005
    },
    
});

module.exports = mongoose.model('Broadcast',Broadcast);