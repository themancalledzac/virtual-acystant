/* eslint-disable no-undef */
const router = require("express").Router();
const passport = require("passport");
const findingsController = require("../../controllers/findingsController");

// Matches with "/api/predictions"
router
  .route("/")
  .get(findingsController.findAll)
  .post(passport.authenticate('jwt', {session: false}), findingsController.create);

module.exports = router; 