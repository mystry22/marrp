const express = require('express');
const router = express.Router();
const {checkToken,verifyToken} = require('../model/TokenModel');
const {mailOTP,updateMailOTP} = require('../functions/Helper_functions');

router.post('/sendotp',(req,res)=>{
    const to = req.body.email;

    checkToken(to).then(feed =>{
      if(feed.length > 0){
        updateMailOTP(to);
        res.json('An OTP has been sent succefully');
      }else{
        mailOTP(to);
        res.json('An OTP has been sent succefully');
      }
    })
});


router.post('/verifyotp',(req,res)=>{
    const to = req.body.email;
    const OTP = req.body.OTP;
    verifyToken(to,OTP).then(result =>{
      if(result.length > 0){
        res.json('verification successful');
      }else{
        res.json('verification unsuccessful');
      }
    })
  });

  module.exports = router;