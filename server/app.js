const dotenv = require('dotenv');
const express = require('express');
dotenv.config({path:'./config.env'});


require('./db/conn');
const app = express();
app.use(express.json());

const ports=process.env.PORT;

//we are linking router with app.js file
app.use(require('./routing/routers'));


app.listen(ports,()=>{
    console.log(ports+" is listening");
})