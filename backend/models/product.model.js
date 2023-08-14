const mongoose=require("mongoose")


const productSchema=mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    type:String,
   category:String,
})


const ProductModel=mongoose.model("product",productSchema)



module.exports={
   ProductModel
}