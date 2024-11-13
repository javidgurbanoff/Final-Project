const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI =
      "mongodb+srv://myuser:mypassword@cluster0.mongodb.net/mydb?retryWrites=true&w=majority";
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });

    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
