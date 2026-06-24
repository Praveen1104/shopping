import express from 'express';
import { getAllProducts, getSingleProduct,addProduct } from '../controller/productController.js';

const productRouter=express.Router();

productRouter.post("/add",addProduct)
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getSingleProduct);
export default productRouter;