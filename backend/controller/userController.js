import HandleError from "../helper/handleError.js";
import userModel from "../models/userModel.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !password || !email) {
      return next(new HandleError("Name, Email, Password cannot be Empty"));
    }
    const user = await userModel.create({
      name,
      email,
      password,
      avatar: {
        public_id: "temp_id",
        url: "temp_url",
      },
    });
    const token = user.getJwtToken();
    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (err) {
    console.log(err);
  }
};
