const express = require("express");
const {
  GetKitchenRoomById,
  UpdateKitchenRoomById,
  GetKitchenRooms,
  DeleteKitchenRoomById,
  CreateKitchenRoom,
} = require("../controllers/KitchenRoomController");

const router = express.Router();

router.get("/:id", GetKitchenRoomById);

router.get("/", GetKitchenRooms);

router.put("/:id", UpdateKitchenRoomById);

router.post("/", CreateKitchenRoom);

router.delete("/:id", DeleteKitchenRoomById);

module.exports = router;
