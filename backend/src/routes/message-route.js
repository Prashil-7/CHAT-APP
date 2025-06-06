import express from 'express'
import  {protectRoute } from "../middleware/authMiddleware.js"
import { getUserForSiderbar,getMessages,sendMessage } from '../controllers/messageController.js';


const router = express.Router();

router.get("/users" , protectRoute , getUserForSiderbar)

router.get ("/:id", protectRoute , getMessages)

router.post("/send/:id", protectRoute , sendMessage)

export default router;