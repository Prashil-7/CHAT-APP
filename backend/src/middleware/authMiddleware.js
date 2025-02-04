import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';



export const protectRoute = async (req ,res,next)=>{

    try {
        const token  = req.cookies.jwt;
        
     
        const decoded = jwt.verify(token , process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ msg:"Unauthorized - Invalid token "});    
        }
         
        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({ msg:"User not found"});
        }

        req.user = user; 
       
       
        next();

        

    } catch (error) {
        
            console.log(`error  in protected route ${error.message}`)
            res.status(500).json({msg :" Internal Server Error"});
            
    }
}