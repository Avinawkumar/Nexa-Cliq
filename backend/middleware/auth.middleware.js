// middleware for autharazition
const jwt=require("jsonwebtoken")
const authenticate = (req,res,next)=>{
    // when used barer
    // const token=req.headers.authorization.split(" ")[1]
    const token=req.headers.authorization
    if(token){
       const decoded=jwt.verify(token,"masai")
       if(decoded){
        req.body.userID=decoded.userID // putting userID into notes document(creting relationship between users and notes collection)

        next()
       } else {
     
       res.status(400).send({msg: "Please Login first"})
       }
    } else {
        res.status(400).send({msg: "Please Login first"})
    }
}



module.exports={
authenticate
}