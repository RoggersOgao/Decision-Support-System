const mongoose = require("mongoose");

const DisruptionSchema = new mongoose.Schema(
  {
    board_of_trustees_: {
      type: String,
      required:false
    },
    bot:{
        type: String,
        required:false
    },
    disruptionDescription:{
        type:String,
        required:true,
        unique:true,
    },
    faculty:{
        type: String,
        required:false
    },
    faculty_:{
    type: String,
    required:false
    },

    file: {
        type:String,
        required:false,
        unique:true
    },
    hera: {
        type: String,
        required:false
    },
      higher_education_regulatory_authority:{
          type: String,
          required:false
      },
      investors: {
        type:String,
        required:false
      },
      investors_: {
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
      ministry_of_education_:{
        type:String,
        required:false
      },
      policies:{
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
    suppliers: {
      type: String,
      required:false
    },
    suppliers_contractors__:{
      type:String,
      required:false
    },
    tm: {
      type: String,
      required:false
    },
      top_management_: {
        type: String,
        required:false
      }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Disruption", DisruptionSchema);