const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
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
