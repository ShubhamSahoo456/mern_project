const express = require('express');
const User = require('../db/schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authenticate = require('../middlewares/authenticate')


//post method for registration with validation
router.post("/register",async(req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        res.status(422).json({message:"plzz fill all the fields",status:false});
    }

    try{
        const check_email = await User.findOne({email:email});
        if(check_email){
            res.status(500).json({message:'email already exists',status:false});
        }else{
            if(password != cpassword){
                res.status(402).json({message:'password not matching',status:false});
            }else{
                const user = new User({name,email,phone,work,password,cpassword});
    
                //middleware function will run before save method defined in schema.js
    
                await user.save();
                res.status(200).json({message:'registered successfully',status:true});
            }
        }
    }catch(error){
        res.status(400).json({error:error});
    }

});



//post method for login user with validation
router.post("/signin",async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400).json({message:'all fields are mandatory',status:false});
    }else{
        const verify_email=await User.findOne({email:email});
        if(!verify_email){
            res.status(400).json({message:'invalid login details',status:false});
        }else{
            const verify_password = await bcrypt.compare(password,verify_email.password);
            if(!verify_password){
                res.status(400).json({message:'invalid login details',status:false});
            }else{
                const token =await verify_email.generateToken();
                res.cookie("jwt",token,{
                    expires:new Date(Date.now+60000000),
                    httpOnly:true
                })
                res.status(200).json({message:'login successfully',status:true});
            }
        }
    }
});

//post method for contavt page adding message schema 
router.post("/api/contact",authenticate, async (req,res)=>{
    try{
        const {name,email,phone,message}  =req.body;
        
        if(!name || !email || !phone || !message){
            res.status(401).json({error:"all fields are mandatory"})
        }
    
        const userContact = await User.findOne({_id:req.userId});
        if(userContact){
            const userMessage = await userContact.addmessage(name,email,phone,message);
            await userContact.save();
            res.status(200).json({message:"message sent successfully"})

        }else{
            res.status(403).json({error:"signin first"});
        }

    }catch(error){
        console.log(error);
    }
})

//get method for about page verify jwt token
router.get("/api/about",authenticate,(req,res)=>{
    console.log('hello from this side');
    res.status(200).send(req.rootuser);
});


//get method to authenticate for hime and contact page
router.get("/api/data",authenticate,(req,res)=>{
    res.status(200).send(req.rootuser);
})



module.exports = router;