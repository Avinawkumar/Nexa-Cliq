const mongoose=require("mongoose")


const cartSchema=mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    quantity:Number,
    dataid:String,
   userID:String
})


const CartModel=mongoose.model("cart",cartSchema)



module.exports={
   CartModel
}