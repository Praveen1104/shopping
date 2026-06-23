import express from 'express';
import { getAllProducts, getSingleProduct } from '../controller/productController.js';

const productRouter=express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getSingleProduct);
export default productRouter;