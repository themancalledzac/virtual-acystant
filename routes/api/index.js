/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const router = require("express").Router();
const userRoutes = require("./user");
const findingsRoutes = require("./findings")
const authRoutes = require("./authentication")
const wikiRoutes = require("./wiki")

// const FileUpload = require("./FileUpload");
const passport = require("passport");
// const imageProcessing = require("./imageProcessing");

router.use("/user", userRoutes);
router.use("/wiki", wikiRoutes);
// router.use("/FileUpload", FileUpload);

router.use("/predictions", findingsRoutes);
// router.use("/FileUpload", FileUpload);

router.use("/auth", authRoutes);

module.exports = router;