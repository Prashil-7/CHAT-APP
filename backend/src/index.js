import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// files in sys own generated
import authRoutes from './routes/auth-route.js';
import messageRoutes from './routes/message-route.js';
import connectDB from './lib/db.js';



dotenv.config();
const app =express(); 

const PORT =  process.env.PORT ;


//middlewares
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:process.env.FRONTEND_URL ,
    credentials: true
}));






//routes 
app.use('/api/auth', authRoutes);
app.use("/api/message" , messageRoutes);




//ex
app.get('/', (req, res) => {
    res.send('Hello World from chat app');
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});