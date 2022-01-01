const express = require('express');
const router = express.Router();
const {toDate} = require('../functions/Helper_functions');
const {signup,checkEmail} = require('../model/UsersModel');
const {encrypty} = require('../functions/encrypt');
const {signToken,checkLogin} = require('../functions/jwt');

router.post('/register',async(req,res)=>{
    const mail = req.body.email;
    const check = {email:mail};
    const pass = req.body.pass;
    const hashedPassword = await encrypty(pass);

  const data = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    org_name : req.body.org_name,
    org_type: req.body.org_type,
    phone: req.body.phone,
    email: req.body.email,
    reg_date : toDate(),
    uniquekey: hashedPassword
  }

  checkEmail(check).then(feed=>{
    if(feed){
      res.json('user already has an account');
    }else{
      signup(data);
     signToken(mail).then(token=>{
         res.json(token);
     });
     
    }
  })

});








module.exports = router;