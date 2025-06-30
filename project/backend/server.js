import { connectDB } from './lib/db.js';
import "dotenv/config" ;
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from 'cookie-parser';

import bookRoutes from "./routes/book.routes.js";
import reviewRoutes from "./routes/review.routes.js";




const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/review", reviewRoutes);

// app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));



app.listen(PORT , ()=>{
    console.log(`The server is running at ${PORT}`);
    connectDB();
});