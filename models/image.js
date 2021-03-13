const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageUrl: { type: Number, required: true },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  date: { type: Date, default: Date.now }
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
