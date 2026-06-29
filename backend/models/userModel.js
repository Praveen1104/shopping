import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
      maxLength: [
        25,
        "Inavlid name, please enter your name fewer than 25 characters",
      ],
      minLength: [3, "Invalid name, please enter more than 3 characters"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter email"],
      validate: [validator.isEmail, "Please enter valid email"],
    },

    password: {
      type: String,
      required: [true, "Please enter Password"],
      minLength: [6, "Password should be more than 6 characters"],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },

    role: {
      type: String,
      default: "user",
    },

    resetPaddwordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true },
);

userSchema.pre("save", function () {
  if (!this.isModified("password")) {
    return;
  }
  this.password = bcryptjs.hash(this.password, 10);
});

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export default mongoose.model("User", userSchema);
