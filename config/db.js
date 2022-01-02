const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/marrp';
const dbUrl = 'mongodb+srv://mystry:mystry.123@lautek.p2i2k.mongodb.net/marrp?retryWrites=true&w=majority';
mongoose.connect(dbUrl, {useUnifiedTopology:true, useNewUrlParser:true},()=>{
    console.log('db connection working for Marrp db');
});