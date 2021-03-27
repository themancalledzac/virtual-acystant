/* eslint-disable no-undef */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const findingsSchema = new Schema({
  findings: [{
    probability: Number,
    className: String
  }],
  date: { type: Date, default: Date.now },
});


const Finding = mongoose.model("Finding", findingsSchema);

module.exports = Finding;