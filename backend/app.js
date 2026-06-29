import express from "express";
import productRouter from "./routes/productRoutes.js";
import errorModdleware from "../backend/middleware/error.js";
import userRouter from "./routes/userRoute.js";

const app = express();

app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/user", userRouter);

app.use(errorModdleware);

export default app;
