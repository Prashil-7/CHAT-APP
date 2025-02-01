import mongoose, { mongo } from 'mongoose';


export default async function connectDB() {

    try {
              const connect = await mongoose.connect(process.env.MONGODB_URI,)
              console.log(`mongodb connected: ${connect.connection.host}`);
              
    } catch (error) {
        console.error(`mongodb not connected : ${error.message}`);
    }
}


