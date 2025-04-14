import express from 'express';
import connectdb from './config/connectdb.js';
import dotenv from 'dotenv';
import vehicleRouter from './routes/vehiceroutes.js';
import cors from "cors"

const app = express()

dotenv.config();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

connectdb().then(() => {
   app.listen(PORT, () => {
     console.log(`Server started at http://localhost:${PORT}`);
   });
 }).catch((err) => {
   console.error("Failed to connect to DB", err);
 });


app.get("/",(req,res)=>{
   res.send("homepage");
})

app.use("/api/vehicle",vehicleRouter)