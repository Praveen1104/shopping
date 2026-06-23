import express from 'express';
import productRouter from './routes/productRoutes.js';


const app=express()


app.use("/api/v1/products", productRouter);

export default app;