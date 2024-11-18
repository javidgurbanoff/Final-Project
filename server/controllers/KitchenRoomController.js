const KitchenRoom = require("../models/KitchenRoom");

async function GetKitchenRooms(req, res, next) {
  try {
    const kitchenRooms = await KitchenRoom.find();
    res.status(200).json(kitchenRooms);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching kitchen rooms", details: err });
  }
}

async function GetKitchenRoomById(req, res, next) {
  try {
    const singleKitchenRoom = await KitchenRoom.findById(req.params.id);
    if (!singleKitchenRoom) {
      return res.status(404).json({ error: "Kitchen room not found" });
    }
    res.status(200).json(singleKitchenRoom);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching kitchen room by ID", details: err });
  }
}

async function UpdateKitchenRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedKitchenRoom = await KitchenRoom.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedKitchenRoom) {
      return res
        .status(404)
        .json({ error: "Kitchen room not found for update" });
    }
    res.status(200).json(updatedBedRoom);
  } catch (err) {
    res.status(500).json({ error: "Error updating Bed room", details: err });
  }
}

async function DeleteKitchenRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const deletedBedRoom = await BedRoom.findByIdAndDelete(id);
    if (!deletedBedRoom) {
      return res
        .status(404)
        .json({ error: "Kitchen room not found for deletion" });
    }
    res.status(200).json({ message: "Kitchen room has been deleted." });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error deleting kitchen room", details: err });
  }
}

async function CreateKitchenRoom(req, res, next) {
  const newKitchenRoom = new KitchenRoom(req.body);
  try {
    const savedKitchenRoom = await newKitchenRoom.save();
    res.status(201).json(savedKitchenRoom);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error creating Kitchen room", details: err });
  }
}

module.exports = {
  GetKitchenRooms,
  GetKitchenRoomById,
  UpdateKitchenRoomById,
  DeleteKitchenRoomById,
  CreateKitchenRoom,
};
