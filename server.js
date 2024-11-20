
const express=require('express');
const app=express();
const mongoose = require('mongoose');
const cors=require('cors')
const routerurl=require('./router/router')
app.use(express.json());//middleware
app.use(cors())
app.use("/app",routerurl);

if(mongoose.connect('mongodb://127.0.0.1:27017/final'))
    {
        console.log('database connected')
    }

app.listen(4005,()=>
    {
        console.log('server is up and run');
    })
    

    // 1. server connection   2. db connect  3. collection/schema  4.router

    //db-->collection--->router--->server-js