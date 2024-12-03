const express = require("express");
const router = express.Router();

const {
  GetWishlist,
  AddToWishlist,
  RemoveFromWishlist,
} = require("../controllers/WishlistController");

router.get("/", GetWishlist);
router.post("/", AddToWishlist);
router.delete("/:id", RemoveFromWishlist);

module.exports = router;
