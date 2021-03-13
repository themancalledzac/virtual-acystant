const router = require("express").Router();
const userController = require("../controllers/userController");


// Matches with "/api/user"
router
  .route("/")
  .get(userController.findAll)
  .post(passport.authenticate('jwt', {session: false}), userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// api router

// login page. does this require and routes? It leads to 2 routes, login and create

// create User, where on the userPage, we want to create user
// router.route("/createUser").post(userController.create);

// all outes matching with the "/:id"
// router
  // .route("/:id")
  // home page, where we, if logged in(?), want to display user data.
  // .get(userController.findById)
  // delete user, maybe from user page
  // .delete(userController.remove)
  // upload image, from home page, upload image, which will reload homepage with data? Or do we have a second screen after an upload?
  // .put(userController.update);
