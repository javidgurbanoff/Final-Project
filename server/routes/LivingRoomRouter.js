const express = require("express");
const {
  GetLivingRoomById,
  UpdateLivingRoomById,
  GetLivingRooms,
  DeleteLivingRoomById,
  CreateLivingRoom,
} = require("../controllers/livingRoomController");

const router = express.Router();

router.get("/:id", GetLivingRoomById);
router.get("/", GetLivingRooms);
router.put("/:id", UpdateLivingRoomById);
router.post("/", CreateLivingRoom);
router.delete("/:id", DeleteLivingRoomById);

module.exports = router;
