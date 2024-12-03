const GetWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Error fetching wishlist" });
  }
};

const AddToWishlist = async (req, res) => {
  try {
    const newProduct = new Wishlist(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product to wishlist" });
  }
};

const RemoveFromWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    await Wishlist.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error removing product from wishlist" });
  }
};

module.exports = {
  GetWishlist,
  AddToWishlist,
  RemoveFromWishlist,
};
