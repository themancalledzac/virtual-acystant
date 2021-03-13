const router = require("express").Router();
const imageController = require("../../controllers/imageController");


// Matches with "/api/images"
router
  .route("/")
  .get(imageController.findAll)
  .post(passport.authenticate('jwt', {session: false}), imageController.create);

// Matches with "/api/images/:id"
router
  .route("/:id")
  .get(imageController.findById)
  .put(imageController.update)
  .delete(imageController.remove);