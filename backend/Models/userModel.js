import mongoose from 'mongoose'
import {model,Schema} from 'mongoose'

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
   
    
},{timestamps:true},)

const User = model('User', userSchema);

export default User;