
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoute");
const connectDB = require("./db"); 
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
