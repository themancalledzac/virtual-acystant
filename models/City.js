const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({});

const City = mongoose.model("City", citySchema);

module.exports = City;
