const nodemailer = require('nodemailer');
const {setUserOTP, updateToken} = require('../model/TokenModel');

// Email Transporter
const transport =()=>{
    const transport = nodemailer.createTransport({
        host: "mail.fink.com.ng",
        port: 587,
        secure: false, 
        auth: {
          user: "talkto@fink.com.ng",
          pass: 'Mystry.22'
        },
        tls:{
            rejectUnauthorized:false
        }
      });

      return transport;
}
// generate OTP
const genOTP =()=>{
    const min =1000;
    const max = 9999;
    const delta = max-min;
    const gen = Math.random();
    const initVal = delta * gen;
    const floored = Math.floor(initVal);
    const conToString = floored.toString();
    const OTP = conToString;
    return OTP;
}

// get today's date
const toDate =()=>{
    const today = new Date();
    return today;
}



//Generate And Send Mail Function
const mailOTP = async(to)=>{
    const reg_date = toDate();
    const OTP = genOTP();
    setUserOTP(to,OTP,reg_date);
    let msg = '';
    const transporter = transport();
    const custom = `
                <h2>Hi Dear</h2><br /> <br />

                    Kindly use the code ${OTP} to complete your registration <br /> <br />
                    
                Best Regards
                 `;
   const mailOptions = {
       from: 'Marrp <talkto@fink.com.ng>',
       to: to,
       subject: "Marrp | Email Verification",
       html: custom
   }

   transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
        console.log(error)
         msg = 'Unable to Complete Request';
         return msg;
    }else{
        msg = 'Your Message Has Been Sent';
        
    }
   })

   
}

//Generate And Update And Send Mail Function
const updateMailOTP = async(to)=>{
    const reg_date = toDate();
    const OTP = genOTP();
    updateToken(to,OTP,reg_date);
    let msg = '';
    const transporter = transport();
    const custom = `
                Fink Traders <br /> <br />

                    Kindly use the code ${OTP} to complete your registration <br /> <br />
                    
                Best Regards
                 `;
   const mailOptions = {
       from: '<talkto@fink.com.ng>',
       to: to,
       subject: "Fink Traders Email Verification",
       html: custom
   }

   transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
        console.log(error)
         msg = 'Unable to Complete Request';
         return msg;
    }else{
        msg = 'Your Message Has Been Sent';
        
    }
   })

   
}


const requestPlan =(plan,email)=>{
    let msg = '';
    const transporter = transport();
    const custom = `
                <h2>Fink Traders</h2><br /> <br />
                    Dear Team,<br /><br />
                    Kindly check the availability of ${plan} plan my email address is ${email} <br /><br />
                Best Regards
                 `;
   const mailOptions = {
       from: '<talkto@fink.com.ng>',
       to: 'alanemehenry6@gmail.com,help@fink.com.ng',
       subject: "Fink Traders Plan Request",
       html: custom
   }

   transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
        console.log(error)
         msg = 'Unable to Complete Request';
         return msg;
    }else{
        msg = 'Your Message Has Been Sent';
        
    }
   })
}

const mailContact =(from,subject,message,name)=>{
    let msg = '';
    const transporter = transport();
    const custom = `
                <h2>Fink Traders</h2><br /> <br />
                    My name is ${name} and email address ${from} <br />
                    ${message} <br /><br />
                Best Regards
                 `;
   const mailOptions = {
       from: '<talkto@fink.com.ng>',
       to: 'alanemehenry6@gmail.com,help@fink.com.ng',
       subject: subject,
       html: custom
   }

   transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
        console.log(error)
         msg = 'Unable to Complete Request';
         return msg;
    }else{
        msg = 'Your Message Has Been Sent';
        
    }
   })
}

const actiAlert =(subject,name,plan,to)=>{
    let msg = '';
    const transporter = transport();
    const custom = `
                <h2>Fink Traders</h2><br /> <br />
                   Dear ${name} your request for a ${plan} has been activated succefully <br />
                    We look forward to hearing from you on how we can serve you more or tailor our product <br />
                    to suit your needs, kindly mail us on help@fink.com.ng <br /><br />
                Best Regards
                 `;
   const mailOptions = {
       from: 'Henry From Fink <talkto@fink.com.ng>',
       to: to,
       subject: subject,
       html: custom
   }

   transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
        console.log(error)
         msg = 'Unable to Complete Request';
         return msg;
    }else{
        msg = 'Your Message Has Been Sent';
        
    }
   })
}

module.exports.mailOTP = mailOTP;
module.exports.updateMailOTP = updateMailOTP;
module.exports.toDate = toDate;
module.exports.requestPlan = requestPlan;
module.exports.mailContact = mailContact;
module.exports.actiAlert = actiAlert;