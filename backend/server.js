import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config({path:"backend/config/config.env"})


app.get("/api/v1",(req,res)=>{
    res.status(200).json({"messeage":"server is working"})
})
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})