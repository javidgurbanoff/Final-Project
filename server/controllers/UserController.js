const bcrypt = require("bcryptjs");
const users = require("../models/UserModel");
const jsonwebtoken = require("jsonwebtoken");

const AuthRegister = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const existingUser = await users.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new users({ username, password: hashedPassword });
    await newUser.save();

    const token = jsonwebtoken.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({ token, user: { username: newUser.username } });
  } catch (error) {
    console.error("Register error:", error);
    res.status(400).json({ message: "Bad request", error: error.message });
  }
};

const AuthLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await users.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, user: { username: user.username } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).json({ message: "Bad request", error: error.message });
  }
};

module.exports = { AuthRegister, AuthLogin };
