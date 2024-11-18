const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/ConnectDb");
const { AuthRegister } = require("./controllers/UserController");

const app = express();

const LivingRoomRouter = require("./routes/LivingRoomRouter");
const BedRoomRouter = require("./routes/BedRoomRouter");
const KitchenRoomRouter = require("./routes/KitchenRoomRouter");
const BathRoomRouter = require("./routes/BathRoomRouter");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

connectDB();

const PORT = process.env.PORT || 8080;

app.use("/api/v1/livingroom", LivingRoomRouter);
app.use("/api/v1/bedroom", BedRoomRouter);
app.use("/api/v1/kitchen", KitchenRoomRouter);
app.use("/api/v1/bathroom", BathRoomRouter);

app.post("/api/v1/auth/register", AuthRegister);
// app.post("/api/v1/auth/login", AuthLogin);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
