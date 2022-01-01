const mongoose = require('mongoose');
const Broadcast =  require('../model_schema/Broadcast_Schema');



const createNewUser = async function(data){
    const newAccount = new Broadcast(data);
    const res = await newAccount.save();
}

// const deleteAccount = async function(data){
//     const deleteOne = await UserSchema.deleteOne(data);
//     return true;
// }

// const getDetails = async function(data){
//     const balance = await UserSchema.findOne(data);
//     return balance;
// }

// const updateStuff = async function(accountNumber,newbalance){
    
//     const update = await UserSchema.updateOne({account_number : accountNumber}, {$set : {balance: newbalance}});
// }

// const updatePassword = async function(accountNumber,pass){
    
//     const update = await UserSchema.updateOne({account_number : accountNumber}, {$set : {uniquekey: pass}});
// }

// const loadTrans = async function(number,minDate,maxDate){
    
//     const loadlog = await TransactionSchema.find({trans_date : {$gte: minDate, $lte: maxDate}, $and : [{account_number : number}]}).sort({'trans_date': -1});

//     return loadlog;
// }


// const checkAvailAccount = async function(data){
//     const available = await UserSchema.findOne(data);
//     return available;
// }

// const getMarkData = async function(data){
//     const marketer = await MarketersSchema.findOne(data);
//     return marketer;
// }

// const otherUpdates = async(ref,status,newMarkBalance)=>{
//     const update = await TransactionSchema.updateOne({ref : ref}, {$set : {status:status, mark_bal : newMarkBalance}});
// }

// const rejectUpdates = async(accountNumber,status)=>{
//     const update = await UserSchema.updateOne({account_number : accountNumber}, {$set : {status:status}});
// }

// const newNotification = async function(data){
//     const notice = new NotificationSchema(data);
//     const res = await notice.save();
//     if(res){
//         return 'true';
//     }else{
//         return 'false';
//     }
// }

// const last5Trans = async function(data){
//     const trans = await TransactionSchema.find(data).sort({"trans_date": -1}).limit(5);
//     return trans;
// }



// const updateMarkBal = async function(mark_id,bal){
    
//     const update = await MarketersSchema.updateOne({mark_id : mark_id}, {$set : {balance: bal}});

//     if(update){
//         return 'true';
//     }else{
//         return 'false';
//     }
// }

// const loadTransDailySpool = async function(minDate,maxDate,initiator){
    
//     const loadlog = await TransactionSchema.find({trans_date : {$gte: minDate, $lte: maxDate}, $and : [{initiator : initiator}]}).sort({'trans_date': -1});

//     return loadlog;
// }





module.exports.createNewUser = createNewUser;





