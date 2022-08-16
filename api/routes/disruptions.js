

const router = require("express").Router();
const User = require("../models/User");
const Disruption = require("../models/Disruption");

//CREATE Disruption
router.post("/", async (req, res) => {
  const newDisruption = new Disruption(req.body);
  try {
    const savedDisruption = await newDisruption.save();
    res.status(200).json(savedDisruption);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE DISRUPTION
router.put("/:id", async (req, res) => {
  try {
    const disruption = await Disruption.findById(req.params.id);
    if (disruption.id === req.body.id) {
      try {
        const updatedDisruption = await Disruption.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedDisruption);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only updated your Post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE DISRUPTION  
router.delete("/:id", async (req, res) => {
  try {
    const disruption = await Disruption.findById(req.params.id);
    if (disruption.id === req.body.id) {
      try {
        await disruption.delete();
        res.status(200).json("Disruption Post  has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET SINGLE DISRUPTION
router.get("/:id", async (req, res) => {
  try {
    const disruption = await Disruption.findById(req.params.id);
    res.status(200).json(disruption);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL DISRUPTIONS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let disruptions;
    if (username) {
      disruptions = await Stakeholder.find({ username });
    } else if (catName) {
      disruptions = await Disruption.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      disruptions = await Disruption.find();
    }
    res.status(200).json(disruptions);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
