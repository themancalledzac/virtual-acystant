const router = require("express").Router();
const userRoutes = require("./user");
<<<<<<< HEAD
const FileUpload = require("./FileUpload");
=======
// const imageProcessing = require("./imageProcessing");
>>>>>>> main

router.use("/users", userRoutes);
router.use("/FileUpload", FileUpload);

module.exports = router;
