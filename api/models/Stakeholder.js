const mongoose = require("mongoose");

const StakeholderSchema = new mongoose.Schema(
  {
    board_of_trustees: {
      type: String,
      required:false
    },
    faculty:{
        type: String,
        required:false
    },
    faculty_:{
      type: String,
      required:false
  },
    higher_education_regulatory_authority:{
        type: String,
        required:false
    },
    bot:{
        type: String,
        required:false
    },
    hera: {
        type: String,
        required:false
    },
    investors: {
      type:String,
      required:false
    },
    ministry_of_education:{
      type:String,
      required:false
    },
    moe: {
      type:String,
      required:false
    },
    staff: {
        type: String,
        required:false
    },
    staff_: {
      type: String,
      required:false
  },
    student: {
      type: String,
      required:false
  },
    student_: {
      type: String,
      required:false
  },
  suppliers_: {
    type: String,
    required:false
  },
  suppliers: {
    type: String,
    required:false
  },
  suppliers_contractors_:{
    type:String,
    required:false
  },
  tm: {
    type: String,
    required:false
  },
    top_management: {
      type: String,
      required:false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stakeholder", StakeholderSchema);