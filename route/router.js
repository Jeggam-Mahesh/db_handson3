const express=require('express')
const route=express.Router();
const userController=require('../controller/usercontroller')
route.post("/createuser",userController.addnewuser);
route.get("/getuser",userController.getuser)
route.put("/updateuser",userController.updateUser)
route.post("/deleteuser",userController.deleteUser)
module.exports=route; 