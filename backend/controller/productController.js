//Add product

import APIHelper from "../helper/APIhelper.js";
import HandleError from "../helper/handleError.js";
import Product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

export const getAllProducts = async (req, res, next) => {
  // const products=await Product.find();
  const resultPerpge = 5;
  const apiHelper = new APIHelper(Product.find(), req.query).serach().filter();
  const filteredQuery = apiHelper.query.clone();
  const produtCount = await filteredQuery.countDocuments();

  const totalPages = Math.ceil(produtCount / resultPerpge);
  const page = Number(req.query.page || 1);
  if (totalPages > 0 && page > totalPages) {
    return next(new HandleError("THis page doen't exist", 404));
  }

  apiHelper.pagination(resultPerpge);
  const products = await apiHelper.query;
  if (!products) {
    return next(new HandleError("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    products,
    produtCount,
    resultPerpge,
    totalPages,
    currentPage: page,
  });
};

export const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }

  res.status(200).json({ success: true, product });
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
};
