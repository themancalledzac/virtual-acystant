const router = require("express").Router();
const userController = require("../controllers/imageController");


// Matches with "/api/images"
router
  .route("/")
  .get(userController.findAll)
  .post(passport.authenticate('jwt', {session: false}), userController.create);

// Matches with "/api/images/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);