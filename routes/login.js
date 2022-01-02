const express = require('express');
const router = express.Router();
const {getDetails,updatesignin} = require('../model/UsersModel');
const {comparePassword} = require('../functions/encrypt');
const {signToken,checkLogin} = require('../functions/jwt');

router.post('/login', (req,res)=>{
    const data = {email : req.body.email};
    const email = res.body.email;
     const pass = req.body.pass;
     //veriify username
     getDetails(data).then(result=>{
         if(!result){
             res.status(403).json('Invalid Credentials')
         }else{
             //verify password
            comparePassword(result,pass).then(response=>{
             if(response == 'verified'){
                 //sign token
                 signToken(data).then(token=>{
                    updatesignin();
                    res.status(200).json(token);
                 });
                 
             }else{
              res.status(403).json('Invalid Credentials');
             }
            })
            
         }
     });
    

});

router.post('/userdetails',checkLogin,(req,res)=>{
    const user = req.user;
    const data = {email : user};
    getDetails(data).then( feed =>{
      res.status(200).json(feed);
    })
  });



module.exports = router;