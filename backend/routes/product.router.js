const express=require("express")
const {ProductModel}=require("../models/product.model")
const products=express.Router()

const {authorization}=require("../middleware/authorization")


products.get("/",async(req,res)=>{
    let q=req.query
    var z={}
        try{
            if(q.category){
                z.category={$regex:q.category,$options:"i"}
                let data=await ProductModel.find(z)
                res.send(data)
            }
            else if(q.type){
                z.type={$regex:q.type,$options:"i"}
                let data=await ProductModel.find(z)
                res.send(data)
            }
           else{
                let data=await ProductModel.find(z)
                res.send(data)
               }
            }catch(err){
                console.log(err)
               }
            })

products.get("/mens",async(req,res)=>{
    // const{q="",page,limit}=req.query
                try{
                    let data=await ProductModel.find({category:"mens"})
                    res.send(data)
                   }catch(err){
                    console.log(err)
                   }
                })
                products.get("/womens",async(req,res)=>{
                    // const{q="",page,limit}=req.query
                                try{
                                    let data=await ProductModel.find({category:"womens"})
                                    res.send(data)
                                   }catch(err){
                                    console.log(err)
                                   }
                                })

products.post("/add",authorization,async(req,res)=>{
const payload=req.body
try{
    let data=new ProductModel(payload)
    await data.save()
    res.send({msg:"Product Added sucessfully"})
}catch(err){
    console.log(err)
    res.send({"msg":"something went wrong"})
}
})
 
// for adding multiple doc at one time
products.post('/api/documents', async (req, res) => {
    const documents = req.body; // Assuming it's an array of objects
  
    try {
      const result = await ProductModel.create(documents);
      res.status(201).json({ message: 'Documents created successfully', result });
    } catch (err) {
      res.status(500).json({ error: 'Error creating documents', err });
    }
  });
///////////////////////////



products.patch("/update/:id",authorization,async(req,res)=>{
    let payload=req.body
    let id=req.params.id 
    try{
            let data=await ProductModel.findByIdAndUpdate({"_id":id},payload)
            res.send({msg:"updated"})
    }catch(err){
        console.log(err)
    }
    })

    products.delete("/delete/:id",authorization,async(req,res)=>{
    let id=req.params.id
    try{
            let data=await ProductModel.findByIdAndDelete({_id:id})
            res.send({msg:"deleted"})
    }catch(err){
        console.log(err)
    }
    })

module.exports={
    products
}