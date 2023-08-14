const express=require("express")
const {connection}=require("./config/db")
const {users}=require("./routes/user.router")
const {products}=require("./routes/product.router") 
const {cart}=require("./routes/cart.router") 
var cors = require('cors')


const app=express()
app.use(express.json())
app.use(cors())
require("dotenv").config()



app.get("/",(req,res)=>{
    console.log("welcome")
    res.send({
        "msg":"this is response"
    })
})

app.use("/users",users)
app.use("/products",products)
app.use("/cart",cart)




   



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("server running")
    }
    catch(err){
        console.log(err)
    }
      
  
})
