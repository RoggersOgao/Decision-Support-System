
const router = require("express").Router();
const User = require("../models/User");
const Stakeholder = require("../models/Stakeholder");

//CREATE POST
router.post("/", async (req, res) => {
  const newStakeholder = new Stakeholder(req.body);
  try {
    const savedStakeholder = await newStakeholder.save();
    res.status(200).json(savedStakeholder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE STAKEHOLDER
router.put("/:id", async (req, res) => {
  try {
    const stakeholder = await Stakeholder.findById(req.params.id);
    if (stakeholder.id === req.body.id) {
      try {
        const updatedStakeholder = await Stakeholder.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedStakeholder);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only Post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE STAKEHOLDER   
router.delete("/:id", async (req, res) => {
  try {
    const stakeholder = await Stakeholder.findById(req.params.id);
    if (stakeholder.id === req.body.id) {
      try {
        await stakeholder.delete();
        res.status(200).json("Stakeholder has been deleted...");
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

//GET STAKEHOLDER
router.get("/:id", async (req, res) => {
  try {
    const stakeholder = await Stakeholder.findById(req.params.id);
    res.status(200).json(stakeholder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL STAKEHOLDERS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let stakeholders;
    if (username) {
      stakeholders = await Stakeholder.find({ username });
    } else if (catName) {
      stakeholders = await Stakeholder.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      stakeholders = await Stakeholder.find();
    }
    res.status(200).json(stakeholders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
