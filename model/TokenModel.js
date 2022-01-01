const Token = require('../model_schema/Token_Schema');
//const UserSchema = require('../model_schema/User_Schema');

// update OTP
const setUserOTP =async(to,OTP,reg_date)=>{
    const data = {
        email: to,
        token: OTP,
        reg_date: reg_date
    }
    const newUser = new Token(data);
    const res = await newUser.save();
}

const checkToken = async(to)=>{
    const data = {email:to};
    const token = await Token.find(data);
    return token;
}

const updateToken = async(to,OTP,reg_date)=>{
    const update = await Token.updateOne({email : to},{$set : {token: OTP, reg_date:reg_date}});
}

const verifyToken = async(to,OTP)=>{
    const data = {email:to, token:OTP}
    const otp = await Token.find({email:to, $and : [{token : OTP}]});
    return otp;
}


module.exports.setUserOTP = setUserOTP;
module.exports.checkToken = checkToken;
module.exports.updateToken = updateToken;
module.exports.verifyToken = verifyToken;