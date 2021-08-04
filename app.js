const dotenv = require('dotenv');
const express = require('express');
dotenv.config({path:'./config.env'});

require('./db/conn');
const app = express();





const ports=process.env.PORT;



app.get("/",(req,res)=>{
    res.send('hello this is home page');
});

app.get("/aboutus",(req,res)=>{
    res.send('heloo this is about us page');
});

app.get("/contactus",(req,res)=>{
    res.send('hello this is contact us page');
});

app.get("/signin",(req,res)=>{
    res.send('hello this is signin page');
});

app.get("/signup",(req,res)=>{
    res.send('hello this is sign up page');
});

app.listen(ports,()=>{
    console.log(ports+" is listening");
})