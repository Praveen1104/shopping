import app from "./app.js";
import dotenv from 'dotenv';
import { DBConnect } from "./config/db.js";

dotenv.config({path:"backend/config/config.env"})


app.get("/api/v1",(req,res)=>{
    res.status(200).json({"messeage":"server is working"})
})

DBConnect();
const PORT=process.env.PORT || 3000
const server=app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

server.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log("shutting down the server due to unhandled promise rejection");
    server.close(()=>{
        process.exit(1);
    })
});
    