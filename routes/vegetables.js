const express = require("express");
const router = express.Router();
const Vegetable = require("../models/vegetables");

router
  .route("/")
  // get all vegetables
  .get(async (req, res, next) => {
    try {
      const foundFruits = await Fruit.find({});
      res.status(200).json(foundFruits);
    } catch (err) {
      res.status(400).send(err);
    }
  })
  // create a new vegetable
  .post(async (req, res, next) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    try {
      const createdVegetable = await Vegetable.create(req.body);
      res.status(200).redirect("/api/vegetables");
    } catch (err) {
      res.status(400).send(err);
    }
  });
router
  .route("/:id")
  // edit a vegetable by ID
  .put(async (req, res, next) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }

    try {
      const updatedVegetable = await Vegetable.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.redirect(`/api/vegetables/${req.params.id}`);
    } catch (err) {
      res.send(err).status(400);
    }
  })
  // delete a vegetable by ID
  .delete(async (req, res, next) => {
    try {
      const deletedVegetable = await Vegetable.findByIdAndDelete(req.params.id);
      res.status(200).redirect("/api/vegetables");
    } catch (err) {
      res.status(400).send(err);
    }
  });

module.exports = router;
