const BathRoom = require("../models/BedRoom");

async function GetBathRooms(req, res, next) {
  try {
    const bathRooms = await BathRoom.find();
    res.status(200).json(bathRooms);
  } catch (err) {
    res.status(500).json({ error: "Error fetching bath rooms", details: err });
  }
}

async function GetBathRoomById(req, res, next) {
  try {
    const singleBathRoom = await BathRoom.findById(req.params.id);
    if (!singleBathRoom) {
      return res.status(404).json({ error: "Bath room not found" });
    }
    res.status(200).json(singleBathRoom);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching bath room by ID", details: err });
  }
}

async function UpdateBathRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedBathRoom = await BathRoom.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedBathRoom) {
      return res.status(404).json({ error: "Bath room not found for update" });
    }
    res.status(200).json(updatedBathRoom);
  } catch (err) {
    res.status(500).json({ error: "Error updating Bath room", details: err });
  }
}

async function DeleteBathRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const deletedBathRoom = await BathRoom.findByIdAndDelete(id);
    if (!deletedBathRoom) {
      return res
        .status(404)
        .json({ error: "Bath room not found for deletion" });
    }
    res.status(200).json({ message: "Bath room has been deleted." });
  } catch (err) {
    res.status(500).json({ error: "Error deleting bath room", details: err });
  }
}

async function CreateBathRoom(req, res, next) {
  const newBathRoom = new BathRoom(req.body);
  try {
    const savedBathRoom = await newBathRoom.save();
    res.status(201).json(savedBathRoom);
  } catch (err) {
    res.status(500).json({ error: "Error creating Bath room", details: err });
  }
}

module.exports = {
  GetBathRooms,
  GetBathRoomById,
  UpdateBathRoomById,
  DeleteBathRoomById,
  CreateBathRoom,
};
