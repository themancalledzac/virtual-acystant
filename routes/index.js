const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");

// put a post route here?
router.use("/user", userRoutes);

// if no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
