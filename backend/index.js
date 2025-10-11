import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";


// Files
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// Configuration
dotenv.config();
connectDB()

const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

const PORT = process.env.PORT

// Routes
app.use("/api/v1/users", userRoutes)

/* 
app.get('/',(req,res)=>{
    res.send("Server is connected")
}) 
    */

app.listen(PORT,()=>console.log(`Listining from port ${PORT}`))