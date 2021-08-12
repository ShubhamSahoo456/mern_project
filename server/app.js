const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
dotenv.config({path:'./config.env'});


require('./db/conn');
const app = express();
app.use(express.json());
app.use(cookieParser());

const ports=process.env.PORT;

//we are linking router with app.js file
app.use(require('./routing/routers'));


app.listen(ports,()=>{
    console.log(ports+" is listening");
})