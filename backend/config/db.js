import mongoose from "mongoose";

 
 const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('Successfully connected to mongodb')
    } catch (error) {
        console.error(`Something went wrong ${error.message}`)
        process.exit(1)
        
    }
 }

 export default connectDB;