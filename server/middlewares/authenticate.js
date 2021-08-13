const jwt = require('jsonwebtoken');
const User = require('../db/schema');


//about authentication
const authenticate =async(req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        const verify_token =await jwt.verify(token,process.env.SECRET_KEY);
        console.log(verify_token);
        const rootuser =await User.findOne({_id:verify_token._id,"tokens.token":token});
        
        if(!rootuser){
            res.json({error:"no records found"})
        }

        req.token=token;
        req.rootuser = rootuser;
        req.userId = rootuser._id;
        next();

    }catch(error){
        console.log(error)
        res.status(401).send('you need to login first to visit about page')
    }
}

module.exports =authenticate;