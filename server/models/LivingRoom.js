const mongoose = require("mongoose");

const LivingRoomSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("LivingRoom", LivingRoomSchema);
