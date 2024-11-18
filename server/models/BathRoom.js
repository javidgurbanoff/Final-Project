const mongoose = require("mongoose");

const BathRoomSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BathRoomSchema", BathRoomSchema);
