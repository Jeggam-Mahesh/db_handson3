const User=require('../model/userModel')
const addnewuser= async (req,res)=>{
    try{
    const user=await User.create([{
             
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
      },{
        
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },{
       
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        
        "firstName": "Jame",
        "lastName": "roh",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },{
        
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },{
       
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },{
        
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },{
        
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
       
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      }
    ])
     res.status(200).send({msg:"data inserted",result:user})   
}
catch(e){
    console.log("errpr",e)
    res.send({error:e})
}}
const getuser=  async(req,res)=>{
    // const query={name:"mahesh_J"}
try{
    const user= await User.find({});
    console.log("user:",user)
    const salaryemp=await User.find({"salary":{$gt:"30000"}})
    console.log("salaryemp",salaryemp);
    const overallExp=await User.find({"overallExp":{$gt:"2"}})
    console.log("overall exp",overallExp);
const query4=await User.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"1"}})
   console.log("graduated after 2015 and overall exp grter than 1 year",query4);
    res.send({msg:"user found",result:user})
}
catch(e){
    console.log(e);
    res.send({error:e})
}
}
const updateUser=async (req,res)=>{
    // const query={name:"mahesh"}
try{
    // const updateduser= await User.findOneAndUpdate(query,req.body,{new:true})
    const updateduser= await User.updateMany({"salary":{$gt:70000}},{$inc:{"salary":-5000}})
    console.log("user:",updateduser)
    res.status(200).send({msg:"user details updated",result:updateduser})
}
catch(e){
    console.log(e);
    res.status(500).send({error:e})
}
}
const deleteUser=async (req,res)=>{
    // const query={"salary":{$gt:"70000"}},{$inc:{"salary":-5000}}
try{
    const result= await User.deleteMany({"lastCompany":"Y"})
    console.log("user:",result)
    res.send({msg:"user details deleted",result:result})
}
catch(e){
    console.log(e);
    res.send({error:e})
}
}
module.exports={addnewuser,getuser,updateUser,deleteUser}