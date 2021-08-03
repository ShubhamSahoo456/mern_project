const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8000;

const db="mongodb+srv://shubhamsahoo:Android161718@cluster0.jjeue.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log('connection successful');
}).catch((error)=>{
    console.log('connection failed');
})



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

app.listen(port,()=>{
    console.log(port+" is listening");
})