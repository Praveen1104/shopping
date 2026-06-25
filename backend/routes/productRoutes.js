import express from 'express';
import { getAllProducts, getSingleProduct,addProduct, updateProduct, deleteProduct } from '../controller/productController.js';

const productRouter=express.Router();

productRouter.post("/add",addProduct)
productRouter.get("/all", getAllProducts);
productRouter.get("/product/:id", getSingleProduct);
productRouter.put("/update/:id",updateProduct)
productRouter.delete("/delete/:id",deleteProduct)
export default productRouter;