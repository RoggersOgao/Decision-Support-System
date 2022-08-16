const mongoose = require("mongoose");

const OrganizationInfoSchema = new mongoose.Schema(
  {
    organizationName: {
      type: String,
      required: true,
    },
    organizationType:{
        type: String,
        required:true,
    },
    organizationRegion:{
        type: String,
        required:true,
    },
    country:{
        type: String,
        required: true,
    },
    economicRating: {
        type: String,
        required: true,
    },
    NoFaculty: {
      type:Number,
      required:false
    },
    NoStaff:{
      type:Number,
      required:false
    },
    NoStudents: {
      type:Number,
      required:false
    },
    entity: {
        type: String,
        required:true,
    },
    decisionRatification:{
        type: Boolean,
        required: false
    },
    organizationRatifier: {
      type: String,
      required: false
    },
    decisionDate: {
      type: String,
      required: true,
    },
    number: {
      type:Number,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrganizationInfo", OrganizationInfoSchema);