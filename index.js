const express = require('express');
const app = express();
const db_conn = require('./config/db');
const bodyPaser = require('body-parser');
const cors = require('cors');

const token = require('./routes/token');
const signup = require('./routes/signup');
const auth = require('./routes/login');



//initialisations

app.use(cors());
app.use(express.json());
app.use(bodyPaser.urlencoded({extended:false}));
app.use(bodyPaser.json());


//routes
app.use('/api/token/',token);
app.use('/api/signup/',signup);
app.use('/api/auth/',auth);

const PORT = process.env.PORT || 3333;

app.listen(PORT, ()=>{
    console.log('listening to port ' + PORT);
})
