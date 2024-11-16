const Collection = require("../models/collections");

async function GetCollections(req, res, next) {
  try {
    const collections = await Collection.find();
    res.status(200).json(collections);
  } catch (err) {
    res.status(200).json(err);
  }
}

async function GetCollectionById(req, res) {
  try {
    const SingleCollection = await Collection.findById(req.params.id);
    res.status(200).json(SingleCollection);
  } catch (err) {
    res.status(200).json(err);
  }
}

async function UpdateCollectionById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedCollection = await Collection.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCollection);
  } catch (err) {
    next(err);
  }
}

async function DeleteCollectionById(req, res, next) {
  try {
    const { id } = req.params;
    await Collection.findByIdAndDelete(id);
    res.status(200).json("Collection has been deleted.");
  } catch (err) {
    next(err);
  }
}

async function CreateCollection(req, res, next) {
  const newCollection = new Collection(req.body);
  try {
    const savedCollection = await newCollection.save();
    res.status(200).json(savedCollection);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  GetCollections,
  GetCollectionById,
  UpdateCollectionById,
  DeleteCollectionById,
  CreateCollection,
};
