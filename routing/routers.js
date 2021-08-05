const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send('router js')
});

router.post("/",(req,res)=>{
    res.send(req.body);
    console.log(req.body);
})


router.get("/aboutus",(req,res)=>{
    res.send('heloo this is about us page');
});

router.get("/contactus",(req,res)=>{
    res.send('hello this is contact us page');
});

router.get("/signin",(req,res)=>{
    res.send('hello this is signin page');
});

router.get("/signup",(req,res)=>{
    res.send('hello this is sign up page');
});

module.exports = router;