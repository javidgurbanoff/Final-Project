const mongoose = require("mongoose");

const KitchenRoomSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("KitchenRoomSchema", KitchenRoomSchema);
