const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const findingsSchema = new Schema({
  image: {type: mongoose.Schema.Types.ObjectId, ref: 'Image'},
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

const Finding = mongoose.model("Finding", findingsSchema);

module.exports = Finding;
