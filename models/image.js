const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  image: {
    url: { type: Number, required: true },
  },
  findings: {
    aKorIc: { type: Number, required: true },
    basalCellCarcinoma: { type: Number, required: true },
    benignKatosis: { type: Number, required: true },
    dermatofibroma: { type: Number, required: true },
    melanoma: { type: Number, required: true },
    malanocyticNevi: { type: Number, required: true },
    vascularSkinLesion: { type: Number, required: true },
  },
  date: { type: Date, default: Date.now }
});

const Image = mongoose.model("Image", imageSchema);

module.exports = User;
