import { generateToken } from '../lib/utils.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';



export const signup = async (req, res) => {
    const {fullName , email, password} = req.body;
    
    try {
         //check all fields are required
       //extra linre do check if not works
       if(!fullName || !email || !password) return res.status(400).json({message: "All fields are required"});

        //hash password use bcrypjs and check user already have account
        if(password.length <6 ){
            return res.status(400).json({msg:"Password must be at least 6 characters"});
        }
        //account deatial already have in database
            const user = await User.findOne({email});
            if(user) return res.status(400).json({msg: "The email already exists"});
       
        
        //hased password now
         const salt =await bcrypt.genSalt(10);
         const hashPassword= await bcrypt.hash(password, salt);
        //create user
        const newUser = new User({
            fullName,
            email,
            password : hashPassword
        });
        //save user
        if(newUser){
            //generate token
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
                msg: "User has been registered successfully"});
        }else{
            return res.status(500).json({msg: "Something went wrong"});
        }

    } catch (error) {
        console.log("err in signup contioller::ywe", error); 
        return res.status(500).json({msg: "Internal Server Error"});
        
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
         
        if(!user){
            return res.status(400).json({ msg :" invalid credentials"});
        }
        const isPasswordCorrect = await bcrypt.compare( password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({ msg :" invalid credentials"});
        }
        generateToken(user._id , res)
        res.status(200).json({
            _id:user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        })

   } catch (error) {
        console.log("err in login", error.message);
        req.status(500).json({ msg: "Internal Server Error"});        
   }
}


export const logout = async (req, res) => {
   try {
    res.cookie("jwt", "" ,{maxAge:0});
    res.status(200).json({msg:"logged out sucessfully"})

   } catch (error) {
    console.log(`err in logout ${error.message}`);
    res.status(500).json({msg:"Internal Server error"});
    
   }
}















