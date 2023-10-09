const mongoose=require('mongoose');
const Schema=mongoose.Schema
const userSchema=new Schema({
    // name:{type:String,
    //     required:[true,"you forgot to enter the name"],
    //     maxlength:[20,"enter characters less than 20"]
    //  },
    // age:{type:Number,required:true,min:18,max:100}
    "firstName": {type:String, required:[true,"you forgot to enter the name"]},
           
        "lastName":  {type:String, required:[true,"you forgot to enter the name"]},
        "salary":  {type:String, required:[true,"you forgot to enter the salary"]},
        "department":  {type:String, required:[true,"you forgot to enter the department"]},
        "lastCompany":  {type:String, required:[true,"you forgot to enter the last company"]},
        "lastSalary": {type:String, required:[true,"you forgot to enter the last salary"]},
        "overallExp":  {type:String, required:[true,"you forgot to enter the overall exp"]},
        "contactInfo":  {type:String, required:[true,"you forgot to enter the contact info"]},
        "yearGrad":  {type:String, required:[true,"you forgot to enter the year grad"]},
        "gradStream":  {type:String, required:[true,"you forgot to enter the gradstream"]}
    
})
module.exports=mongoose.model('user',userSchema)