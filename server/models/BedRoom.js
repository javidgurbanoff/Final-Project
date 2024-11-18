const mongoose = require("mongoose");

const BedRoomSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BedRoomSchema", BedRoomSchema);
