import express from 'express';
import productRouter from './routes/productRoutes.js';
import errorModdleware from "../backend/middleware/error.js"

const app=express()


app.use("/api/v1/products", productRouter);

app.use(errorModdleware);

export default app;