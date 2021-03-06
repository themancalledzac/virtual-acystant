const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // How do we do a check on city/state to make sure they exist? Some check on an API?
  location: {
    city: { type: String },
    state: { type: String },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
