const express = require('express');
const User = require('../db/schema');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send('router js')
});


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
            const user = new User({name,email,phone,work,password,cpassword});
            await user.save();
            res.status(200).json({message:'registered successfully',status:true});
        }

    }catch(error){
        res.send(error);
    }

});


router.get("/aboutus",(req,res)=>{
    res.send('heloo this is about us page');
});

router.get("/contactus",(req,res)=>{
    res.send('hello this is contact us page');
});

router.get("/signin",(req,res)=>{
    res.send('hello this is signin page');
});

router.get("/register",(req,res)=>{
    res.send('hello this is sign up page');
});

module.exports = router;