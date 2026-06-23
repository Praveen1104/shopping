export const getAllProducts = (req, res) => {
    res.status(200).json({ message: "get all products" });
}

export const getSingleProduct = (req, res) => {
    res.status(200).json({ message: "get single product" });
}