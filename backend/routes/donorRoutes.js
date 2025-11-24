const express = require("express");
const Donor = require("../models/donor");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const donor = new Donor(req.body);
  await donor.save();
  res.json(donor);
});

// READ
router.get("/", async (req, res) => {
  const donors = await Donor.find();
  res.json(donors);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const donor = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(donor);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Donor.findByIdAndDelete(req.params.id);
  res.json({ message: "Donor removed" });
});

module.exports = router;
