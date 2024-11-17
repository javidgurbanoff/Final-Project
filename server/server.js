const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/ConnectDb");
const { AuthRegister } = require("./controllers/UserController");

app.use(express.json());
app.use(express.json({ extends: true }));
app.use(cors());

connectDB();

const PORT = process.env.PORT || 8080;

app.use("/api/v1/auth", AuthRegister);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
