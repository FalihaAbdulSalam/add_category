const express=require('express');
const router=express.Router();
const post=require('../model/post');
const upload=require('../middleware/upload');
const path=require('path');
const fs=require('fs');


router.get('/',async(req,res)=>{
  // res.send("we r on post");
  try{
    const posts=await post.find();
    res.json(posts);
  }catch(err){
    res.json({message:err});
  }
});


router.post('/', upload.single('Image') ,async(req,res)=>{
  console.log(req.file);
const add_category=new post({
    Name:req.body.Name,
    Code:req.body.Code,
    Description:req.body.Description,
    Image:req.file.path
});
if (req.file) {
  post.Image=req.file.path
}
try {
    const addCategory=await add_category.save();
    res.json(addCategory);
} catch (err) {
    res.json({message:err}); 
}

});


module.exports=router;

