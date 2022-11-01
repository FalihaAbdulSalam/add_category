const mongoose=require('mongoose');


const addSchema = new mongoose.Schema({
        Name: {
            type:String,
            required:true
        },
        Code:Number,
        Description:String,
        Image:{
            type:String,
            required:true  
        }
      });

 module.exports=mongoose.model('posts',addSchema) ; 