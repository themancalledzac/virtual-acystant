const router = require("express").Router();
const userRoutes = require("./user");
const FileUpload = require("./FileUpload");
// const imageProcessing = require("./imageProcessing");

router.use("/users", userRoutes);
router.use("/FileUpload", FileUpload);

module.exports = router;
