import User from '../models/userModel.js'
import Message from '../models/messageModel.js'
import cloudinary from '../lib/cloudinary.js';


export const getUserForSiderbar = async (req, res)=>{

try {
    const  loggedInUserId  =req.user._id;
    const  filteredUsers = await User.find({_id : {$ne : loggedInUserId}}).select("-password");

    res.status(200).json(filteredUsers);
} catch (error) {
    console.log( ` err in messagecontoller get usersiderbar ${error.message}`);
    res.status(500).json({msg:"err in Internal server message controller"})    
}};


export const getMessages = async(req,res)=>{
    try {
        const { id : userToChatId} = req.params;
        const myId = req.user._id;
        
        const messages =await Message.find({
            $or:[
                {senderId :myId , receiverId : userToChatId},
                {senderId : userToChatId , receiverId: myId}
            ]
        })
        res.status(200).json(messages)
    } catch (error) {
        console.log(`the meeage err ${error.message}`);
        res.status(500).json({msg:"error in getmessage internal server error"})
        
        
    }



};


export const sendMessage = async (req,res)=>{
    
    try {
        
        const { text, image} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;
        let imageUrl;
        if(image){
            //upload basae64  to cloudnuanry me 
            const uploadresponse =await cloudinary.uploader.upload(image);
            imageUrl = uploadresponse.secure_url;
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        });
                await newMessage.save();

                //real time functionality ==> soket.io

                res.status(201).json({newMessage})

    } catch (error) {
        console.log(`the sendMessage err ${error.message}`);
        res.status(500).json({msg:"error in sendMessage internal server error"}) 
    }
}