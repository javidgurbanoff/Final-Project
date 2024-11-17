const generateToken = require("../helpers/TokenGenerate");
const hashPassword = require("../helpers/HashPasswordGenerate");
const User = require("../models/UserModel");

const AuthRegister = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "Email is already registered. Please use a different email.",
      });
    }

    const hashedPassword = hashPassword(password);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      user: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      status: "error",
      message: "Server error. Please try again later.",
    });
  }
};

module.exports = { AuthRegister };
