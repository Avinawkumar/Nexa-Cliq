const express=require("express")
const {UserModel}=require("../models/User.model")
const users=express.Router()
const {authorization}=require("../middleware/authorization")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


users.get("/",authorization,async(req,res)=>{
    let q=req.headers.authorization
    // let user=req.body.userID
    // let name=req.body.name
    jwt.verify(q,"masai",async(err, decoded)=>{
        if(decoded){
            try{
                let data=await UserModel.find()
                res.send(data)
               }catch(err){
                console.log(err)
               }
            }
            else{
                res.send("Please Login")
            }
      })
})
users.post("/register",async(req,res)=>{
const {email,password,name}=req.body
try{
    const data=await UserModel.find({email})
        if(data.length>0){
    res.send({msg:"Already registered"})
        }
    else{
    bcrypt.hash(password, 5,async(err, hash)=>{
        const user=new UserModel({email,password:hash,name})
    await user.save()
    res.send({msg:"registered"})
    });
    }
}catch(err){
    console.log(err)
}
})

users.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const data=await UserModel.find({email})
        
        if(data.length>0){
            bcrypt.compare(password,data[0].password,(err, result)=> {
                if(result){
                    var token= jwt.sign({userID:data[0]._id},"masai", {
                        expiresIn: '5h',
                     });
                     res.send({ msg: "Login Successful", token: token ,data})
                    
                }
             });
        }
        else{
            res.send({msg:"wrong credentials"})  
        }
    }catch(err){
        console.log(err)
    }
    })


users.delete("/delete/:id",authorization,async(req,res)=>{
        let id=req.params.id
        try{
                let data=await UserModel.findByIdAndDelete({_id:id})
                res.send({msg:"deleted"})
        }catch(err){
            console.log(err)
        }
        })














module.exports={
    users
}