const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String, 
    required: true },
  lastName: { 
    type: String, 
    required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  // location: {
  //   type: isValidObjectId,
  //   ref: City,
  // },
  // image: {},
});

const User = mongoose.model("users", userSchema);

module.exports = User;
