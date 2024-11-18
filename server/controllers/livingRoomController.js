const LivingRoom = require("../models/LivingRoom");

async function GetLivingRooms(req, res, next) {
  try {
    const livingRooms = await LivingRoom.find();
    res.status(200).json(livingRooms);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching living rooms", details: err });
  }
}

async function GetLivingRoomById(req, res, next) {
  try {
    const singleLivingRoom = await LivingRoom.findById(req.params.id);
    if (!singleLivingRoom) {
      return res.status(404).json({ error: "Living room not found" });
    }
    res.status(200).json(singleLivingRoom);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching living room by ID", details: err });
  }
}

async function UpdateLivingRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedLivingRoom = await LivingRoom.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedLivingRoom) {
      return res
        .status(404)
        .json({ error: "Living room not found for update" });
    }
    res.status(200).json(updatedLivingRoom);
  } catch (err) {
    res.status(500).json({ error: "Error updating living room", details: err });
  }
}

async function DeleteLivingRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const deletedLivingRoom = await LivingRoom.findByIdAndDelete(id);
    if (!deletedLivingRoom) {
      return res
        .status(404)
        .json({ error: "Living room not found for deletion" });
    }
    res.status(200).json({ message: "Living room has been deleted." });
  } catch (err) {
    res.status(500).json({ error: "Error deleting living room", details: err });
  }
}

async function CreateLivingRoom(req, res, next) {
  const newLivingRoom = new LivingRoom(req.body);
  try {
    const savedLivingRoom = await newLivingRoom.save();
    res.status(201).json(savedLivingRoom);
  } catch (err) {
    res.status(500).json({ error: "Error creating living room", details: err });
  }
}

module.exports = {
  GetLivingRooms,
  GetLivingRoomById,
  UpdateLivingRoomById,
  DeleteLivingRoomById,
  CreateLivingRoom,
};
