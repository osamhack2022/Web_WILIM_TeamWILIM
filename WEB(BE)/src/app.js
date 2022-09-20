// const express = require('express');

// es6 way
import express from "express";

const app = express();

//api test
app.get('/hello',(req,res,next)=>{
    res.send({"msg" : "hello world!"});
})

app.listen(5000,()=>{
    console.log("listening on port 5000");
});