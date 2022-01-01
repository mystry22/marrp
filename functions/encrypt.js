const bcrypt = require('bcrypt');

const encrypty = async(data)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data,salt);
    return hashedPassword;
}

const comparePassword = async(result,pass)=>{
    const isPass = await bcrypt.compare(pass,result.uniquekey);
        if(!isPass){
            return ('not verified');
        }else{
            return ('verified');
        }
    
}



module.exports.encrypty = encrypty;
module.exports.comparePassword = comparePassword;