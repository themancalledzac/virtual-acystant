/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const router = require("express").Router();
const userRoutes = require("./user");
const wikiRoutes = require("./wiki");
// const FileUpload = require("./FileUpload");
const passport = require("passport");
// const imageProcessing = require("./imageProcessing");

router.use("/user", userRoutes);
router.use("/wiki", wikiRoutes);
// router.use("/FileUpload", FileUpload);

module.exports = router;
