const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api");
// const wikiRoutes = require("./api/wiki");

// API Routes
router.use("/api", userRoutes);

// router.use("/api/wiki", wikiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// put a post route here?
// router.use("/user", userRoutes);

// if no API routes are hit, send the React app
// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
