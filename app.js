const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const multer=require('multer'); 



require('dotenv/config');


app.use(bodyParser.json());

const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute);

app.use('/uploads',express.static('uploads'))

app.get('/',(req,res)=>{
    res.send("haii everyone");
});



mongoose.connect(
process.env.DB_CONNECTION,
()=>console.log('connected to DB')
);


app.listen(3000,(req,res)=>{
    console.log("listening to server");
});
