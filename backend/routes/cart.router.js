const express=require("express")
const {CartModel}=require("../models/cart.model")
const cart=express.Router()

const {authorization}=require("../middleware/authorization")


cart.get("/",authorization,async(req,res)=>{
   let userID= req.body.userID
        try{
                let data=await CartModel.find({userID})
                res.send(data)
            }catch(err){
                console.log(err)
               }
            })

cart.post("/add",authorization,async(req,res)=>{
const payload=req.body
const dataid=req.body.dataid
const userID=req.body.userID
try{
    const data=await CartModel.find({dataid,userID})
    if(data.length>0){
        res.send({msg:"Product Already in cart"})
    }
    else{
    let cart=new CartModel(payload)
    await cart.save()
    res.send({msg:"Product Added sucessfully"})
    }
}catch(err){
    console.log(err)
    res.send({"msg":"something went wrong"})
}
})

cart.patch("/update/:id",authorization,async(req,res)=>{
    let payload=req.body
    let id=req.params.id
    let note=await CartModel.findOne({"_id":id})
    let user=note.userID
    let user_making_req=req.body.userID
    try{
        if(user!=user_making_req){
            res.send("you are not authorized")  
        }
        else{
            let data=await CartModel.findByIdAndUpdate({"_id":id},payload)
            res.send({msg:"updated"})
        }
    }catch(err){
        console.log(err)
    }
    })

    cart.delete("/delete/:id",authorization,async(req,res)=>{
    let id=req.params.id
    try{
        let note=await CartModel.findOne({_id:id})
        let user=note.userID
        let user_making_req=req.body.userID
        if(user==user_making_req){
            let data=await CartModel.findByIdAndDelete({_id:id})
            res.send({msg:"deleted"})
        }
        else{
            res.send("you are not authorized")  
        }
    }catch(err){
        console.log(err)
    }
    })

module.exports={
    cart
}