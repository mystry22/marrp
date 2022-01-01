const jwt = require('jsonwebtoken');
require('dotenv').config();

const signToken = async(data)=>{
    const token = await jwt.sign(data,process.env.TOKEN_SECRET);
    return token;
}

const signTokenForPublic = async(data)=>{
  const payload = {account: data}
  const token = await jwt.sign(payload,process.env.TOKEN_SECRET);
  return token;
}

const checkLogin = function(req,res,next){

    try{
      const token = req.headers.authorization;
      const splitToken = token.split(' ');
      const actualToken = splitToken[1];
      jwt.verify(actualToken, process.env.TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
          console.log('invalid credentials');
        } else {
          req.user = decodedToken
          next();
        }
      });
    
      
    }catch(err){
      console.log('err');
      
    }
  
  }

module.exports.signToken = signToken;
module.exports.checkLogin = checkLogin;
module.exports.signTokenForPublic = signTokenForPublic;