export const getAllProducts = (req, res,next) => {

    const products=0;
    if (!products) {
        return next(new HandleError("Product Not Found",404));
    }
    res.status(200).json({ message: "get all products" });
}

export const getSingleProduct = (req, res) => {
    res.status(200).json({ message: "get single product" });
}