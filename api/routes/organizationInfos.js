const router = require("express").Router();
const User = require("../models/User");
const OrganizationInfo = require("../models/OrganizationInfo");

//CREATE ORGANIZATION INFORMATION
router.post("/", async (req, res) => {
  const newOrganizationInfo = new OrganizationInfo(req.body);
  try {
    const savedOrganizationInfo = await newOrganizationInfo.save();
    res.status(200).json(savedOrganizationInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ORGANIZATION INFORMATION
router.put("/:id", async (req, res) => {
  try {
    const organizationInfo = await OrganizationInfo.findById(req.params.id);
    if (organizationInfo.id === req.body.id) {
      try {
        const updatedOrganizationInfo = await OrganizationInfo.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedOrganizationInfo);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your OrganizationInfo!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ORGANIZATION INFORMATION
router.delete("/:id", async (req, res) => {
  try {
    const organizationInfo = await OrganizationInfo.findById(req.params.id);
    if (OrganizationInfo.id === req.body.id) {
      try {
        await organizationInfo.delete();
        res.status(200).json("Organization Information has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your OrganizationInfo!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET OrganizationInfo
router.get("/:id", async (req, res) => {
  try {
    const organizationInfo = await OrganizationInfo.findById(req.params.id);
    res.status(200).json(organizationInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL OrganizationInfoS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let OrganizationInfos;
    if (username) {
      OrganizationInfos = await OrganizationInfo.find({ username });
    } else if (catName) {
      OrganizationInfos = await OrganizationInfo.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      OrganizationInfos = await OrganizationInfo.find();
    }
    res.status(200).json(OrganizationInfos);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;