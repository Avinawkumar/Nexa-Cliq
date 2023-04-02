const express = require('express');
const { UserModel } = require('../model/user.model');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userRouter = express.Router();

//register routes
// while registering encrypting password with bcrypt and hashing algorithm

userRouter.post("/register", async (req, res) =>{
    const {email,password,location,age}=req.body
    try {
        bcrypt.hash(password, 8, async (err, hash)=>{
            const user=new UserModel({email,password:hash,location,age})
            try {
                await user.save()
                res.status(200).send({msg:"registration successful"})
            } catch (error) {
                res.status(200).send({msg:"user already registered"})
            }
                
            })

            // res.status(200).send({msg:"registration successful"})
        
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
});

// login routes
// while login comparing encrypted password that is saved in DB in incrypted format
userRouter.post("/login", async (req, res) => {
    const {email,password} = req.body;
    try {
        const user=await UserModel.findOne({email})
       
            if(user){
                // compairing the password
               bcrypt.compare(password, user.password, function(err, result) {
                
                   if(result){
                    // creating jwt token for auth
                   const token = jwt.sign({ "userID":user._id }, 'masai');
                   res.status(200).send({"msg":"Login Successfull","token":token})
                   }
                   else {
                    {res.status(400).send({msg:"Wrong Password"})}
                   }
                });
            }
             else {
              res.status(400).send({msg:"Wrong Password"})
            }

   
    } catch (error) {
        res.status(400).send({msg: error.message})
    }
})


module.exports = userRouter;







//protected route
// userRouter.get("/details", async(req,res) =>{
   
//     let token = req.headers.authorization
//     //verfify the token
//     jwt.verify(token, 'shhhhh', function(err, decoded) {
//         if(err){
//             console.log(err)
//             res.send("something wrong")
//         }
//         console.log(decoded) // bar
//         res.send("details")
//       });

//     // try {
        
//     // } catch (error) {
        
//     // }
    
// })

// userRouter.post("/login", async (req, res) => {
//     try {
//         const user = await UserModel.findOne({email: req.body.email})
//         if (!user) {
//             res.status(400).send({msg: "invalid email or password"})
//         } else {
//             const validPassword = await user.comparePassword(req.body.password)
//             if (!validPassword) {
//                 res.status(400).send({msg: "invalid email or password"})
//             } else {
//                 const token = user.generateAuthToken()
//                 res.status(200).send({token})
//             }
//         }
//     } catch (error) {
//         res.status(400).send({msg: error.message})
//     }
// })









