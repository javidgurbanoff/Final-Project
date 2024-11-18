const express = require("express");
const {
  GetBathRoomById,
  UpdateBathRoomById,
  GetBathRooms,
  DeleteBathRoomById,
  CreateBathRoom,
} = require("../controllers/BathRoomController");

const router = express.Router();

router.get("/:id", GetBathRoomById);

router.get("/", GetBathRooms);

router.put("/:id", UpdateBathRoomById);

router.post("/", CreateBathRoom);

router.delete("/:id", DeleteBathRoomById);

module.exports = router;
