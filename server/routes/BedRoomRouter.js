const express = require("express");
const {
  GetBedRoomById,
  UpdateBedRoomById,
  GetBedRooms,
  DeleteBedRoomById,
  CreateBedRoom,
} = require("../controllers/BedRoomController");

const router = express.Router();

router.get("/:id", GetBedRoomById);

router.get("/", GetBedRooms);

router.put("/:id", UpdateBedRoomById);

router.post("/", CreateBedRoom);

router.delete("/:id", DeleteBedRoomById);

module.exports = router;
