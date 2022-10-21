import express from 'express';
import {upload} from "../multer.js";
const router = express.Router();

router.get('/upload',(req,res,next)=>{
    res.render("multer.ejs");
})

router.post('/upload',upload.single('image'),(req,res,next)=>{
    if (!req.file) return res.status(400).json("cannot find the ImageFile!");
    res.send(req.file);
})


module.exports = router;