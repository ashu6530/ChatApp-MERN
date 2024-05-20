import User from "../Models/userModel.js"
import { generateToken } from "../config/generateToken.js"
import {hash,compare} from 'bcrypt'

//register user ---
const registerUser = async  (req,res)=>{
    const {name,email,password,pic} = req.body
    
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please enter all the feilds ")
    }
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User already exist")
    }
    const saltRounds = 10;
    const hashPassword = await hash(password,saltRounds)

    const user = await User.create({
        name,
        email,
        password: hashPassword,
        pic,
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)
        })
    }else {
        res.status(400);
        throw new Error("failed to create the user ")
    }
}
const loginUser=async(req,res)=>{
    const {email,password} =req.body
  
    if(!email || !password){
    res.status(400)
    throw new Error("Please enter all the feilds ")
    }
    const user = await User.findOne({email})
    const isPasswordValid = await compare(password, user.password);
    if(user && isPasswordValid){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)
        })
    }else {
        res.status(400);
        throw new Error("failed to login ")
    }


}

export {registerUser,loginUser }