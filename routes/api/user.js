/* eslint-disable no-undef */
const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");

// Matches with "/api/user"
router
  .route("/")
  .get(userController.findById)
  .post(passport.authenticate('jwt', {session: false}), userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/test")
  .get(userController.test)

module.exports = router;