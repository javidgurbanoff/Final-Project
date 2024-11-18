const BedRoom = require("../models/BedRoom");

async function GetBedRooms(req, res, next) {
  try {
    const bedRooms = await BedRoom.find();
    res.status(200).json(bedRooms);
  } catch (err) {
    res.status(500).json({ error: "Error fetching bed rooms", details: err });
  }
}

async function GetBedRoomById(req, res, next) {
  try {
    const singleBedRoom = await BedRoom.findById(req.params.id);
    if (!singleBedRoom) {
      return res.status(404).json({ error: "Bed room not found" });
    }
    res.status(200).json(singleBedRoom);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching bed room by ID", details: err });
  }
}

async function UpdateBedRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedBedRoom = await BedRoom.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedBedRoom) {
      return res.status(404).json({ error: "Bed room not found for update" });
    }
    res.status(200).json(updatedBedRoom);
  } catch (err) {
    res.status(500).json({ error: "Error updating Bed room", details: err });
  }
}

async function DeleteBedRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const deletedBedRoom = await BedRoom.findByIdAndDelete(id);
    if (!deletedBedRoom) {
      return res.status(404).json({ error: "Bed room not found for deletion" });
    }
    res.status(200).json({ message: "Bed room has been deleted." });
  } catch (err) {
    res.status(500).json({ error: "Error deleting bed room", details: err });
  }
}

async function CreateBedRoom(req, res, next) {
  const newBedRoom = new BedRoom(req.body);
  try {
    const savedBedRoom = await newBedRoom.save();
    res.status(201).json(savedBedRoom);
  } catch (err) {
    res.status(500).json({ error: "Error creating Bed room", details: err });
  }
}

module.exports = {
  GetBedRooms,
  GetBedRoomById,
  UpdateBedRoomById,
  DeleteBedRoomById,
  CreateBedRoom,
};
